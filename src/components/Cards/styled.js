import styled, {keyframes} from "styled-components";
import { fadeIn} from 'react-animations';

const fader = keyframes`${fadeIn}`;

const CardsContainer = styled.main`
    margin: 50px 0 50px 0;
    display: grid;
    grid-template-columns: repeat(3, minmax(300px, 1fr));
    column-gap: 1rem;
    row-gap: 5rem;
    animation: ${fader} 1s;
  `;

export {CardsContainer};