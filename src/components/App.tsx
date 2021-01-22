import React from 'react';
import { ISong, ISongActionTypes } from '../actions/types';
import { IRootState } from '../interfaces/IRootState';
import SongDetail from './SongDetail';
import SongList from './SongList';




const App : React.FC = () => {
    return(
        <div className='ui container grid'>
            <div className='ui row' style={{marginTop:30}}>
                <div className='column eight wide'>
                    <SongList/>
                </div>
                <div className='column eight wide'>
                    <SongDetail/>
                </div>
            </div>          
        </div>
    )
}

export default App;