import React from 'react';

import Cell from './cell'

const Stage = ({stage}) => (
   <div>
       {stage.map(fila => fila.map((cell, x)=> <Cell key={x} type={cell[0]} />))}
   </div>
)

export default Stage