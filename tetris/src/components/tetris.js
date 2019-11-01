import React from 'react';

//components
import Stage from './stage'
import Display from './display'
import StartButton from './startButton'

//functions
import {createStage} from '../gameHelperes'

const Tetris = () => {
    return(
        <div className="stageHolder">

            <Stage stage={createStage()}/>
            
            <aside className="aside">

                <div className="scoreHolder">
                    <Display text="Puntaje"/>

                    <Display text="Lineas"/>

                    <Display text="Nivel"/>
                </div>

               <StartButton/> 

            </aside>

        </div>
    )
}

export default Tetris;