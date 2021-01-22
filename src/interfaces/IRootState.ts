import {ISong} from '../actions/types'



export interface IRootState {
    songs: ISong[],
    selectedSong:ISong
}