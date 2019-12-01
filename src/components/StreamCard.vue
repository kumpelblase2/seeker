<template>
    <b-card class="mb-2" bg-variant="dark" header-class="huge-header-img">
        <template v-slot:header>
            <b-card-img-lazy :src="thumbnail" />
        </template>
        <b-card-body>
            <b-link :href="streamLink">
                <b-card-title>{{stream.title}}</b-card-title>
                <b-card-sub-title>{{stream.user_name}} - {{stream.viewer_count}}</b-card-sub-title>
                <b-card-text>{{getGameDisplayName(stream.game_id)}}</b-card-text>
            </b-link>
            <b-card-text>
                <b-badge v-for="tagId in stream.tag_ids" variant="light" :key="tagId">{{getTagDisplayName(tagId)}}</b-badge>
            </b-card-text>
        </b-card-body>
        <b-button @click="ignoreStream" variant="outline-light">Ignore</b-button>
    </b-card>
</template>

<script>
    import { mapGetters, mapMutations } from "vuex";
    import { getGameDisplayName } from "../store/func";

    export default {
        name: "StreamCard",
        props: ['stream'],
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
            getGameDisplayName(gameId) {
                return getGameDisplayName(this.getGame(gameId)) || gameId;
            },
            ignoreStream() {
                this.addIgnoredStream(this.stream.user_id);
            },
            getTagDisplayName(tagId) {
                let tag = this.tagById(tagId);
                if(tag == null) return tagId;
                return tag.localization_names['en-us'];
            }
        }
    }
</script>

<style scoped>
    .huge-header-img {
        padding: 0 !important;
        height: ;
    }
</style>
