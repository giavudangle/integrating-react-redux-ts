import { act } from 'react-dom/test-utils';
import {combineReducers} from 'redux';

import { GET_ALL_SONGS, ISong, ISongActionTypes, SONG_SELECTED } from "../actions/types";

const songsReducer = () : ISong[]=> {
    return[
        {title : 'You are the reason',duration:'4:05'},
        {title : 'You went away',duration:'3:05'},
        {title : 'At my worst',duration:'5:05'},
        {title : 'Nothing gonna change my love for you',duration:'3:15'},
        {title : 'You are a dog',duration:'4:55'},
    ]
}

const initialState : ISong = {title:null,duration:null};


const selectedSongReducer = (selectedSong = initialState,action :ISongActionTypes ) : ISong  => {
    if(action.type === SONG_SELECTED){
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs : songsReducer,
    selectedSong: selectedSongReducer
})




