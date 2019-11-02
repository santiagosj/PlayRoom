import {useState, useEffect } from 'react'
 import {createStage} from '../gameHelperes'

 export const useStage = (player, resetPlayer) => {

    const [stage, setStage] = useState(createStage());

    const [ limpiarFilas, setLimpiarFilas] = useState(0)
    
     useEffect(()=>{
         setLimpiarFilas(0);

         const sweepFilas = newStage =>
            newStage.reduce((acumulador, fila) => {
               if (fila.findIndex(cell => cell[0] === 0) === -1) {
               setLimpiarFilas(prev => prev + 1);
               acumulador.unshift(new Array(newStage[0].length).fill([0, 'clear']));
               return acumulador;
         }
        acumulador.push(fila);
        return acumulador;
      }, [])


         const updateStage = prevStage => {
             
             const newStage = prevStage.map(fila => fila.map(cell => (cell[1] === 'clear' ? [0,'clear'] : cell ) ) )

             player.ficha.forEach((fila, y) => {
                 fila.forEach((value,x)=>{
                     if(value !== 0) {
                         newStage[y + player.pos.y][x + player.pos.x] = [
                             value,
                             `${player.collided ? 'merged':'clear'}`
                         ]
                     }
                 })
             })
             
              if(player.collided){
                  resetPlayer()
                  return sweepFilas(newStage)
              }
             return newStage
         }

         setStage(prev => updateStage(prev))
     },[player.collided,
        player.pos.x,
        player.pos.y,
        player.ficha, 
        resetPlayer]);

     return [ stage, setStage,limpiarFilas ] 
 }