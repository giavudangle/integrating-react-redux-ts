import React , {Component} from 'react';
import {connect} from 'react-redux';
import { ISong ,ISongActionTypes} from '../actions/types';
import {selectSong} from '../actions';
import { AnyAction, bindActionCreators, Dispatch, Store } from 'redux';

import {IRootState} from '../interfaces/IRootState'

// Declare interface what are props you want to use in this compoent 
// Props Type
interface ISongListPropsTypes  {
    songs : ISong[],
    selectedSong: ISong,
    actionSelectSong: (song : ISong) => ISongActionTypes,
}

interface IStateProps {
    songs : ISong[],
    selectedSong: ISong,
}


interface IDispatchProps{
    actionSelectSong : (song : ISong) => any ,
}

 

class SongList extends Component<ISongListPropsTypes>{
    renderList():JSX.Element[]{
        return this.props.songs.map((song) => {
            return(
                <div className='item' key={this.generateId()}>
                    <div className='right floated content'>
                        <button
                            onClick={() => this.props.actionSelectSong(song)}
                         className='ui button primary'>
                            Select
                        </button>
                    </div>
                    <div className='content'>{song.title}</div>
                </div>
            )
        })
    }


    generateId() : string {
        return 'RD '  + (Math.random()*1923).toString() ;
    }

    render(){
        console.log(this.props)

        return(
            <div className='ui divided list'>
                {this.renderList()}
            </div>
        )
    }
}


// Parameters retrieves state implements interface IStateProps and return that.
const mapStateToProps = (state : IRootState) : IStateProps => {
    return {
        songs:state.songs,
        selectedSong:state.selectedSong
    }
}


const mapDispathToProps = (dispath : Dispatch) : IDispatchProps=>  {
    return {
        actionSelectSong: (song) => dispath(selectSong(song)),
    }
}




// High order function (function call function)
export default connect(mapStateToProps,mapDispathToProps)(SongList);