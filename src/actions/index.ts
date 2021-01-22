import { GET_ALL_SONGS, ISong, ISongActionTypes, SONG_SELECTED } from "./types";

export const selectSong  = (song : ISong) : ISongActionTypes => {
    return {
        type:SONG_SELECTED,
        payload:song
    }
}


