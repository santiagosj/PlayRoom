import styled from 'styled-components'
import bgImage from '../../img/retro-glitch.gif';

export const StyledTetrisWrapper = styled.div`
    width: 100vw;
    height: 100vh;
   background-image:url(${bgImage});
   background-size:cover;
   background-repeat:no-repeat;
   overflow:hidden;
`

export const StyledTetris = styled.div`
   display:flex;
   align-items:flex-start;
   padding: 17px 40px;
   margin: 0 auto;
   max-width: 900px;

  aside {
    width: 100%;
    max-width: 200px;
    display: block;
    padding: 0 20px;
  }
`