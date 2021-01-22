export const SONG_SELECTED = 'SONG_SELECTED'
export const GET_ALL_SONGS = 'GET_ALL_SONGS'

export interface ISong{
    title:String | null,
    duration:String | null
}


interface ISelectSongAction {
    type: typeof SONG_SELECTED,
    payload:ISong
}

interface IGetAllSongsAction {
    type: typeof GET_ALL_SONGS,
    payload:ISong[]
}


export type ISongActionTypes = ISelectSongAction | IGetAllSongsAction;