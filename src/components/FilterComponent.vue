<template>
  <b-col class="h-100 p-2 pl-3 filter-container" :class="{ 'small-container': !display }">
      <b-row class="mb-1 px-3">
        <b-btn class="w-100" variant="outline-light" @click="toggleExpand">{{ expandClose }}</b-btn>
      </b-row>
      <b-col v-if="display" class="outer-container p-0">
          <b-col class="w-100 mb-5 p-0">
              <b-input class="col mb-2" type="text" v-model="streamName" placeholder="Stream to ignore"
                       @keyup.enter="ignoreStream" />
              <b-row class="px-3">
                  <b-badge v-for="streamId in ignoredStreams" :key="streamId" @click="removeIgnoredStream(streamId)">
                      <span class="remove-on-hover">{{streamDisplayName(streamId)}}</span>
                  </b-badge>
              </b-row>
          </b-col>
          <b-col class="w-100 mb-5 p-0">
              <b-input class="col mb-2" type="text" v-model="tagName" placeholder="Tag/language to ignore"
                       @keyup.enter="ignoreTag" list="tagList" autocomplete="off"/>
              <datalist id="tagList">
                <template v-for="tag in allTags">
                  <option :value="tagDisplayName(tag)"></option>
                </template>
              </datalist>
              <b-row class="px-3">
                  <b-badge v-for="tagId in ignoredTags" :key="tagId" @click="removeIgnoredTag(tagId)">
                      <span class="remove-on-hover">{{tagDisplayName(tagId)}}</span>
                  </b-badge>
              </b-row>
          </b-col>
          <b-col class="w-100 mb-5 p-0">
              <b-input class="col mb-2" type="text" v-model="gameName" placeholder="Game to ignore"
                       @keyup.enter="ignoreGame"/>
              <b-checkbox :checked="ignoreNoGame" @change="ignoreStreamsWithoutGame($event)">Ignore streams without category</b-checkbox>
              <b-row class="px-3">
                  <b-badge v-for="gameId in ignoredGames" :key="gameId" @click="removeIgnoredGame(gameId)">
                      <span class="remove-on-hover">{{gameDisplayName(gameId)}}</span>
                  </b-badge>
              </b-row>
          </b-col>
      </b-col>
  </b-col>
</template>

<script>
    import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
    import { getGameDisplayName, getTagDisplayName } from "@/store/func";

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
            ...mapState(['ignoredTags', 'ignoredStreams', 'ignoredGames', 'ignoreNoGame']),
            ...mapGetters(['tagById', 'getStreamName', 'getGame', 'allTags']),
            expandClose() {
                return this.display ? '<<' : '>>';
            }
        },
        methods: {
            ...mapActions(['ignoreStreamByName', 'ignoreTagByName', 'ignoreGameByName']),
            ...mapMutations(['removeIgnoredStream', 'removeIgnoredTag', 'removeIgnoredGame','ignoreStreamsWithoutGame']),
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
    .filter-container {
      max-width: min(30vw, 300px);
      width: 100%;
    }

    .small-container {
      max-width: max(5vw, 75px);
      width: 100%;
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
