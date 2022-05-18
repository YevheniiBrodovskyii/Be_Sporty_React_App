import styled, {keyframes} from "styled-components";
import { fadeIn} from 'react-animations';

const fader = keyframes`${fadeIn}`;

const CardsContainer = styled.main`
    display: grid;
    grid-template-columns: repeat(3, minmax(400px, 1fr));
    column-gap: 1rem;
    animation: ${fader} 0.5s;
    @media (min-width: 1025px) and (max-width: 1600px) {
      grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
      column-gap: 1.5rem;
    }
    @media (min-width: 320px) and (max-width: 1024px) {
        grid-template-columns: repeat(1, minmax(300px, 1fr));
    }
  `;

export {CardsContainer};