import React from 'react'
import {StyledCell} from './styles/styledCell'
import {FICHAS} from '../fichas'

const Cell = ({type}) => (
       <StyledCell type = {type} color={FICHAS[type].color}/> 
)

export default React.memo(Cell)