import React from 'react';
import {connect } from 'react-redux';
import { ISong } from '../actions/types';
import { IRootDispatch } from '../interfaces/IRootDispatch';
import { IRootState } from '../interfaces/IRootState';

interface IStateProps {
    selectedSong : ISong
}


// const SongDetail : React.FunctionComponent<{selectedSong : ISong}> = ({selectedSong}) => {
//     return (
//         <div>
//             {selectedSong.title}
//         </div>
//     )
    
// }


const SongDetail : React.FC<IStateProps> = ({selectedSong}) => {
    return (
        <div>
            {selectedSong.title === null 
            ? 'Select a Song' 
            : 
            <>
                <h3>== Details ==</h3>
                <p>
                Title: {selectedSong.title}   
                </p>
                <p>
                Duration : {selectedSong.duration}
                </p>
            </>
            }
            
        </div>
    )
    
}


const mapStateToProps = (state : IRootState) : IStateProps => {
    return{
        selectedSong:state.selectedSong
    }
}

export default connect(mapStateToProps)(SongDetail);