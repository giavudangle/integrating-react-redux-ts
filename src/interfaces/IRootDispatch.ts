import { ISong, ISongActionTypes } from "../actions/types";

export interface IRootDispatch {
    selectSong : (song: ISong) => ISongActionTypes
}