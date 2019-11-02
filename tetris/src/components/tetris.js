import React , {useState} from 'react';

//components
import Stage from './stage'
import Display from './display'
import StartButton from './startButton'

//hooks
import {usePlayer}from '../hooks/usePlayer'
import {useStage} from '../hooks/useStage'
import {useInterval} from '../hooks/useInterval'
import { useGameStatus } from '../hooks/useGameStatus';

//styled Components
import {StyledTetrisWrapper, StyledTetris} from './styles/styledTetris'

import {createStage, stageCollision} from '../gameHelperes'

const Tetris = () => {

   const [dropTime, setDropTime] = useState(null)
   const [gameOver, setGameOver] = useState(false)

   const [player, updatePlayerPos, resetPlayer, playerRotate ] = usePlayer()
   const [stage, setStage, limpiarFilas] = useStage(player, resetPlayer)
   const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(
    limpiarFilas
  );
    
    const movePlayer = dir =>{ 

        if( !stageCollision(player, stage, {x: dir, y: 0} )){
            updatePlayerPos({
                x: dir,
                y: 0
            })
        }
       
    }

    const startGame = () => {
          setDropTime(1000)
          setScore(0);
          setLevel(0);
          setRows(0);
          setStage(createStage());
          resetPlayer()
          setGameOver(false)
    }

    const drop = () => {
          //subir de nivel cuando se superan las 10 lineas
        if (rows > (level + 1) * 10) {
            setLevel(prev => prev + 1);
            // aumenta la velocidad 
            setDropTime(1000 / (level + 1) + 200);
          }

        if (!stageCollision(player, stage, {x:0,y:1})) {
            updatePlayerPos({
                x: 0,
                y: 1,
                collided: false
            })
        }else{
            if(player.pos.y < 1){
                setGameOver(true);
                setDropTime(null)
            }
            updatePlayerPos({
                x: 0,
                y: 0,
                collided: true
            })
        }
       

    }
     
    const keyUp = ({keyCode}) => {
        if (!gameOver) {
           if (keyCode === 40) {
               setDropTime(1000 / (level + 1) + 200)
           }
        }
    }

    const dropPlayer = () => {
        setDropTime(null)
       drop()
    }

    const move = ({keyCode}) => {

       if(!gameOver){

            if(keyCode === 37){

                movePlayer(-1)

            }else if(keyCode === 39){

                movePlayer(1)

            }else if(keyCode === 40){

                dropPlayer()

            }else if(keyCode === 38){
                playerRotate(stage,1)
            }

        }

    }

    useInterval(()=>{
        drop()
    },dropTime)

    return(

          <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)} onKeyUp={keyUp}>
            
               <StyledTetris>

                    <Stage stage={stage}/>
                    
                    <aside className="aside">

                           { gameOver ? (
                             
                              <Display gameOver={gameOver} text="Game Over"/>
                         
                             ) : (
                        
                              <div className="scoreHolder">
                            
                                    <Display text={`Puntaje: ${score}`}/>

                                    <Display text= {`Filas: ${rows}` } />

                                    <Display text= {`Nivel: ${level}`} /> 

                              </div>

                           )}
                        
                    <StartButton callback={startGame}/> 

                    </aside>

              </StyledTetris>
             
          </StyledTetrisWrapper>

      )

}

export default Tetris;