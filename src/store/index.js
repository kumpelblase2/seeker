import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import * as twitch from "../api/twitch";
import { getGameDisplayName, getTagDisplayName } from "./func";

const TAG_PAGE_SIZE = 100;

const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
    reducer: ({ tags, ignoredTags, ignoredStreams, games, streamNames, ignoredGames }) => ({
        tags: tags.filter(tag => ignoredTags.includes(tag.tag_id) || tag.is_auto),
        ignoredTags,
        ignoredStreams,
        games: games.filter(game => ignoredGames.includes(game.id)),
        streamNames: streamNames.filter(stream => ignoredStreams.includes(stream.id)),
        ignoredGames
    })
});

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        cursor: null,
        selectedGameId: null,
        tags: [],
        streamNames: [], // [{name, id}]
        streams: [],
        games: [],
        ignoredTags: [],
        ignoredStreams: [],
        ignoredGames: []
    },
    mutations: {
        updateCursor(state, cursor) {
            state.cursor = cursor;
        },
        addTags(state, tags) {
            tags.forEach(tag => state.tags.push(tag));
        },
        addStreams(state, streams) {
            streams.forEach(stream => {
                stream.tag_ids = stream.tag_ids || [];
                const existing = state.streams.findIndex(existingStream => existingStream.user_id === stream.user_id);
                if(existing >= 0) {
                    Object.assign(state.streams[existing], stream);
                } else {
                    state.streams.push(stream)
                }
            });
        },
        addGames(state, games) {
            games.forEach(game => state.games.push(game));
        },
        addIgnoredStream(state, streamId) {
            if(!state.ignoredStreams.includes(streamId)) {
                state.ignoredStreams.push(streamId);
            }
        },
        addIgnoredTag(state, tagId) {
            if(!state.ignoredTags.includes(tagId)) {
                state.ignoredTags.push(tagId);
            }
        },
        addIgnoredGame(state, gameId) {
            if(!state.ignoredGames.includes(gameId)) {
                state.ignoredGames.push(gameId);
            }
        },
        addStreamNameLook(state, names) {
            const unknown = names.filter(({ _, id }) =>
                state.streamNames.findIndex(nameMapping => nameMapping.id === id) < 0);

            state.streamNames.push(...unknown);
        },
        removeIgnoredStream(state, streamId) {
            const index = state.ignoredStreams.findIndex(id => id === streamId);
            if(index >= 0) {
                state.ignoredStreams.splice(index, 1);
            }
        },
        removeIgnoredTag(state, tagId) {
            const index = state.ignoredTags.findIndex(id => id === tagId);
            if(index >= 0) {
                state.ignoredTags.splice(index, 1);
            }
        },
        removeIgnoredGame(state, gameId) {
            const index = state.ignoredGames.findIndex(id => id === gameId);
            if(index >= 0) {
                state.ignoredGames.splice(index, 1);
            }
        },
        selectGame(state, gameId) {
            if(state.selectedGameId !== gameId) {
                state.cursor = null;
                while(state.streams.length > 0) {
                    state.streams.pop();
                }
            }
            state.selectedGameId = gameId;
        }
    },
    getters: {
        visibleStreams(state) {
            return state.streams.filter(stream => {
                return state.ignoredTags.every(tag => !stream.tag_ids.includes(tag)) &&
                    state.ignoredStreams.every(streamId => streamId !== stream.user_id) &&
                    (state.selectedGameId != null || state.ignoredGames.every(gameId => gameId !== stream.game_id));
            });
        },
        tagById(state) {
            return (id) => state.tags.find(tag => tag.tag_id === id);
        },
        getGame(state) {
            return (id) => state.games.find(game => game.id === id);
        },
        getStreamName(state) {
            return (id) => (state.streamNames.find(nameMapping => nameMapping.id === id) || {}).name || id;
        },
        hasTag(state) {
            return (id) => state.tags.find(tag => tag.tag_id === id) != null;
        },
        hasGame(state) {
            return (id) => state.games.find(game => game.game_id === id) != null;
        },
        selectedGame(state) {
            return state.games.find(game => game.id === state.selectedGameId);
        }
    },
    actions: {
        async loadStreams({ commit, state, dispatch, getters }, gameId = null) {
            commit('selectGame', gameId);
            const response = await twitch.getStreams(state.cursor, gameId);
            const streams = response.data;
            commit('updateCursor', response.pagination.cursor);
            commit('addStreams', streams);
            const nameMappings = streams.map(stream => ({ name: stream.user_name, id: stream.user_id }));
            commit('addStreamNameLook', nameMappings);

            const games = streams.map(stream => stream.game_id).filter(gameId => !getters.hasGame(gameId));
            dispatch('loadGames', games);

            const tags = [...new Set(streams.flatMap(stream => stream.tag_ids))].filter(tagId => !getters.hasTag(tagId));
            dispatch('loadTags', tags);
        },
        async loadTags({ commit, state }, tagIds) {
            let cursor = null;
            let offset = 0;
            while(true) {
                if(offset * TAG_PAGE_SIZE >= tagIds.length) {
                    return;
                }

                const response = await twitch.getTags(tagIds.slice(offset * TAG_PAGE_SIZE, TAG_PAGE_SIZE), cursor);
                const tags = response.data;
                cursor = response.pagination.cursor;
                commit('addTags', tags);
                offset += 1;
            }
        },
        async loadGames({ commit }, gameIds) {
            const response = await twitch.getGames(gameIds);
            commit('addGames', response.data);
        },
        async ignoreStreamByName({ commit }, userName) {
            const response = await twitch.getStreamFromName(userName);
            if(response.data.length > 0) {
                commit('addIgnoredStream', response.data[0].id);
            }
        },
        ignoreTagByName({ state, commit }, tagName) {
            const foundTag = state.tags.find(tag => getTagDisplayName(tag) === tagName);
            if(foundTag != null) {
                commit('addIgnoredTag', foundTag.tag_id);
            }
        },
        ignoreGameByName({ state, commit }, gameName) {
            const foundGame = state.games.find(game => getGameDisplayName(game) === gameName);
            if(foundGame != null) {
                commit('addIgnoredGame', foundGame.id);
            }
        }
    },
    modules: {},
    plugins: [vuexLocal.plugin]
})
