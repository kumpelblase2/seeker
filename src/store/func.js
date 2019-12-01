export function getTagDisplayName(tag) {
    if(tag == null) return null;
    return tag.localization_names['en-us'];
}

export function getGameDisplayName(game) {
    if(game == null) return null;
    return game.name;
}
