<template>
    <div class="container-fluid">
        <div class="row">
            <b-input class="col" type="text" v-model="streamName" placeholder="Stream to ignore" @keyup.enter="ignoreStream"/>
            <b-input class="col" type="text" v-model="tagName" placeholder="Tag to ignore" @keyup.enter="ignoreTag"/>
            <b-input class="col" type="text" v-model="gameName" placeholder="Game to ignore" @keyup.enter="ignoreGame"/>
        </div>
        <div class="row">
            <div class="col">
                <div v-for="streamId in ignoredStreams">
                    {{streamDisplayName(streamId)}}
                    <b-link @click="removeIgnoredStream(streamId)">X</b-link>
                </div>
            </div>
            <div class="col">
                <div v-for="tagId in ignoredTags">
                    {{tagDisplayName(tagId)}}
                    <b-link @click="removeIgnoredTag(tagId)">X</b-link>
                </div>
            </div>
            <div class="col">
                <div v-for="gameId in ignoredGames">
                    {{gameDisplayName(gameId)}}
                    <b-link @click="removeIgnoredGame(gameId)">X</b-link>
                </div>
            </div>
        </div>
    </div>
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
                gameName: ""
            };
        },
        computed: {
            ...mapState(['ignoredTags', 'ignoredStreams','ignoredGames']),
            ...mapGetters(['tagById', 'getStreamName','getGame'])
        },
        methods: {
            ...mapActions(['ignoreStreamByName', 'ignoreTagByName','ignoreGameByName']),
            ...mapMutations(['removeIgnoredStream','removeIgnoredTag','removeIgnoredGame']),
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
            }
        }
    }
</script>

<style scoped>

</style>
