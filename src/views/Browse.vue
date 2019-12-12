<template>
    <div class="browse">
        <b-col class="filter-container flex-grow-0">
            <FilterComponent/>
        </b-col>
        <b-col class="streams-container flex-grow-1" ref="streamList">
            <b-row class="no-padding" align-h="center" justify-content="between">
                <b-col v-for="stream in visibleStreams" :key="stream.id" class="stream-container">
                    <StreamCard :stream="stream"/>
                </b-col>
                <b-col class="stream-container" style="width: 300px">
                    <mugen-scroll ref="scroll" :handler="loadNewStreams" :should-handle="!busy" handle-on-mount
                                  scroll-container="streamList">
                        <b-btn block :disabled="this.busy" @click="loadNewStreams">{{loadButtonText}}</b-btn>
                    </mugen-scroll>
                </b-col>
            </b-row>
        </b-col>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from "vuex";
    import StreamCard from "../components/StreamCard";
    import FilterComponent from "../components/FilterComponent";
    import MugenScroll from 'vue-mugen-scroll'

    function sleep(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }

    export default {
        name: 'Browse',
        components: { FilterComponent, StreamCard, MugenScroll },
        data() {
            return {
                busy: false
            };
        },
        computed: {
            ...mapGetters(['visibleStreams', 'getGame', 'hasTag', 'hasGame']),
            loadButtonText() {
                return this.busy ? "Loading..." : "Load more";
            }
        },
        methods: {
            ...mapActions(['loadStreams']),
            loadNewStreams() {
                this.busy = true;
                this.loadStreams().then(() => {
                    this.busy = false
                }).then(() => sleep(500)).then(() => {
                    if(!this.busy) {
                        this.$refs.scroll.checkInView();
                    }
                });
            }
        }
    }
</script>

<style>
    .browse {
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-around;
        padding-top: 10px;
    }

    .filter-container {
        max-width: 15%;
        height: 100%;
        padding-top: 10px;
        padding-bottom: 10px;
    }

    .streams-container {
        max-height: 100%;
        overflow-y: scroll;
    }

    .stream-container {
        max-width: 300px;
        margin-bottom: 15px;
    }

    .stream {
        display: flex;
        flex-direction: column;
    }

    .stream img {
        max-height: 250px;
        max-width: 100%;
    }

    .stream span {
        margin-bottom: 4px;
    }

    .tag-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .tag {
        margin-left: 5px;
        margin-right: 5px;
    }

    .tag:first-child {
        margin-left: 0;
    }
</style>
