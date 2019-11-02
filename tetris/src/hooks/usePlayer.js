import { useState, useCallback } from 'react'
import { FICHAS , fichasRandom} from '../fichas'
import {STAGE_WIDTH, stageCollision} from '../gameHelperes'

export const usePlayer = () => {

    const [player, setPlayer] = useState({
        pos:{x:0,y:0},
        ficha: FICHAS[0].forma,
        collided:false
    });

    const rotate = (matrix, dir) =>{
        //transformar las filas en columnas
        const rotandoFicha = matrix.map((_, index) =>  matrix.map(col => col[index]));
        if (dir > 0) return rotandoFicha.map(fila => fila.reverse());
        return rotandoFicha.reverse()
    } 

    const playerRotate = (stage, dir) => {
        const playerClone = JSON.parse(JSON.stringify(player));
        playerClone.ficha = rotate(playerClone.ficha, dir);

        const pos = playerClone.pos.x;
        let offset = -1;

        while( stageCollision(playerClone,stage,{x:0,y:0}) ){
            playerClone.pos.x += offset;
            offset = -(offset + (offset > 0 ? 1 : -1));
            if (offset > playerClone.ficha[0].lenght) {
                rotate(playerClone.ficha, -dir);
                playerClone.pos.x = pos;
                return;
            }
        }
        setPlayer(playerClone)
    }

    const updatePlayerPos = ({ x, y, collided }) => {
        setPlayer(prev => ({
          ...prev,
          pos: { x: (prev.pos.x += x), y: (prev.pos.y += y)},
          collided,
        }))
      }
    
    const resetPlayer = useCallback(
        () => {
            setPlayer({
                pos:{x: STAGE_WIDTH / 2 - 2, y: 0 },
                ficha: fichasRandom().forma,
                collided:false
            })
        },
        [],
    )

    return [ player, updatePlayerPos, resetPlayer,playerRotate]

}