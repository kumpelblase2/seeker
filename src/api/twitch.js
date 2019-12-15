import Axios from "axios";
import { TWITCH_API_CLIENT_ID } from "./api-key";

const BASE_URL = "https://api.twitch.tv/helix/";
const axios = Axios.create({
    baseURL: BASE_URL,
    headers: { 'Client-ID': TWITCH_API_CLIENT_ID }
});

function asList(paramName, values) {
    return values.map(value => paramName + "=" + value).join("&");
}

export function getStreams(cursor = null, gameId = null) {
    const cursorParam = cursor != null ? "&after=" + cursor : "";
    const gameParam = gameId != null ? "&game_id=" + gameId : "";
    return axios.get(`/streams?first=50${cursorParam}${gameParam}`).then(response => response.data);
}

export function getTags(tagIds = [], cursor = null) {
    const cursorParam = cursor != null ? "&after=" + cursor : "";
    const tagsParam = "&" + asList('tag_id', tagIds);
    return axios.get(`/tags/streams?first=100${tagsParam}${cursorParam}`).then(response => response.data);
}

export function getGames(gameIds) {
    return axios.get(`/games?${asList('id', gameIds)}`).then(response => response.data);
}

export function getStreamFromName(name) {
    return axios.get(`/users?login=${name}`).then(response => response.data);
}
