<template>
    <div style="width: 100%" @mouseenter="hover = true" @mouseleave="hover = false">
        <a :href="streamLink">
            <b-img-lazy class="stream-thumbnail" :src="thumbnail"></b-img-lazy>
            <h6 class="stream-title" :title="stream.title">{{stream.title}}</h6>
        </a>
        <p class="stream-username">{{stream.user_name}} - {{formattedViewers(stream.viewer_count)}} Viewers</p>
        <p class="stream-game">{{gameDisplayName(stream.game_id)}}</p>
        <div class="stream-tags">
            <b-badge v-for="tagId in stream.tag_ids" variant="light" :key="tagId">{{getTagDisplayName(tagId)}}</b-badge>
        </div>
        <div class="actions" v-if="hover">
            <b-button variant="outline-light" block @click="ignoreStream">Ignore</b-button>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapMutations } from "vuex";
    import { getGameDisplayName, getTagDisplayName } from "../store/func";

    export default {
        name: "StreamCard",
        props: ['stream'],
        data() {
            return {
                hover: false
            };
        },
        computed: {
            ...mapGetters(['getGame', 'tagById']),
            streamLink() {
                return "https://twitch.tv/" + this.stream.user_name;
            },
            thumbnail() {
                return this.stream.thumbnail_url.replace('{width}', 1280).replace('{height}', 780);
            }
        },
        methods: {
            ...mapMutations(['addIgnoredStream']),
            gameDisplayName(gameId) {
                return getGameDisplayName(this.getGame(gameId)) || gameId;
            },
            getTagDisplayName(tagId) {
                return getTagDisplayName(this.tagById(tagId)) || tagId;
            },
            ignoreStream() {
                this.addIgnoredStream(this.stream.user_id);
            },
            formattedViewers(viewCount) {
                if(viewCount < 1000) {
                    return viewCount;
                } else {
                    const subThousand = Math.floor((viewCount % 1000) / 100);
                    const aboveThousand = Math.floor(viewCount / 1000);
                    if(subThousand <= 0) {
                        return aboveThousand + "k";
                    } else {
                        return aboveThousand + "." + subThousand + "k";
                    }
                }
            }
        }
    }
</script>

<style scoped>
    a:hover {
        color: white;
    }

    h6 {
        margin: 0;
    }

    p {
        margin: 0;
    }

    .stream-username {
        color: #8e959d;
    }

    .stream-thumbnail {
        height: 177px;
        padding-bottom: 5px;
    }

    .stream-title {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .stream-game {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .actions {
        margin-top: 3px;
    }

    .actions>.btn {
        height: 25px;
        padding-top: 0;
        padding-bottom: 0;
    }

    .badge {
        margin-right: 3px;
    }
</style>
