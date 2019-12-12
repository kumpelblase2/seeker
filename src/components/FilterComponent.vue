<template>
    <b-col class="h-100">
        <b-row class="h-100">
            <b-col v-if="display" class="h-100 outer-container">
                <div class="filter-third">
                    <b-input class="col mb-2" type="text" v-model="streamName" placeholder="Stream to ignore"
                             @keyup.enter="ignoreStream"/>
                    <b-row>
                        <b-badge v-for="streamId in ignoredStreams" :key="streamId" @click="removeIgnoredStream(streamId)">
                            <span class="remove-on-hover">{{streamDisplayName(streamId)}}</span>
                        </b-badge>
                    </b-row>
                </div>
                <div class="filter-third">
                    <b-input class="col mb-2" type="text" v-model="tagName" placeholder="Tag/language to ignore"
                             @keyup.enter="ignoreTag"/>
                    <b-row>
                        <b-badge v-for="tagId in ignoredTags" :key="tagId" @click="removeIgnoredTag(tagId)">
                            <span class="remove-on-hover">{{tagDisplayName(tagId)}}</span>
                        </b-badge>
                    </b-row>
                </div>
                <div class="filter-third">
                    <b-input class="col mb-2" type="text" v-model="gameName" placeholder="Game to ignore"
                             @keyup.enter="ignoreGame"/>
                    <b-row>
                        <b-badge v-for="gameId in ignoredGames" :key="gameId" @click="removeIgnoredGame(gameId)">
                            <span class="remove-on-hover">{{gameDisplayName(gameId)}}</span>
                        </b-badge>
                    </b-row>
                </div>
            </b-col>
            <b-col class="h-100 align-items-stretch" style="max-width: 40px">
                <b-btn variant="outline-light" @click="toggleExpand">{{expandClose}}</b-btn>
            </b-col>
        </b-row>
    </b-col>
</template>

<script>
    import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
    import { getGameDisplayName, getTagDisplayName } from "../store/func";

    export default {
        name: "FilterComponent",
        data() {
            return {
                streamName: "",
                tagName: "",
                gameName: "",
                display: true
            };
        },
        computed: {
            ...mapState(['ignoredTags', 'ignoredStreams', 'ignoredGames']),
            ...mapGetters(['tagById', 'getStreamName', 'getGame']),
            expandClose() {
                return this.display ? '<<' : '>>';
            }
        },
        methods: {
            ...mapActions(['ignoreStreamByName', 'ignoreTagByName', 'ignoreGameByName']),
            ...mapMutations(['removeIgnoredStream', 'removeIgnoredTag', 'removeIgnoredGame']),
            ignoreStream() {
                this.ignoreStreamByName(this.streamName);
                this.streamName = "";
            },
            ignoreTag() {
                this.ignoreTagByName(this.tagName);
                this.tagName = "";
            },
            ignoreGame() {
                this.ignoreGameByName(this.gameName);
                this.gameName = "";
            },
            tagDisplayName(tagId) {
                return getTagDisplayName(this.tagById(tagId)) || tagId;
            },
            streamDisplayName(streamId) {
                return this.getStreamName(streamId);
            },
            gameDisplayName(gameId) {
                return getGameDisplayName(this.getGame(gameId)) || gameId;
            },
            toggleExpand() {
                this.display = !this.display;
            }
        }
    }
</script>

<style scoped>
    .outer-container {
        width: 25vw;
        max-width: 25vw;
    }

    .filter-third {
        max-height: 33%;
        min-height: 33%;
    }

    .badge > .remove-on-hover {
        cursor: pointer;
    }

    .remove-on-hover {
        position: relative;
        display: inline-block;
    }

    .remove-on-hover:hover::before {
        content: '';
        border-bottom: 2px solid #6c757d;
        width: 100%;
        position: absolute;
        right: 0;
        top: 50%;
    }
</style>
