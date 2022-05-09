import styled from "styled-components";

const CardContent = styled.section`
    width: 300px;
    height: 300px;
    margin: 0 auto;
    padding: 15px 5px 15px 5px;
    background-color: #ffffff;
    border-radius: 15px;
    transition: 0.5s all;
    cursor: pointer;
    &:hover {
      transform : scale(105%);
    }
  `;

  const CardName = styled.h2`
    text-align: center;
    color: #000000;
    font-weight: 700;
    font-size: 40px;
    margin: 20px 0 0 0;
    padding: 0;
  `;

  const CardImageContainer = styled.p`
    text-align: center;
    margin: 0;
    padding: 0;
  `;

  const CardImage = styled.img`
    width: 200px;
    height: 200px;
    margin: 0 auto;
  `;

export {CardContent, CardName, CardImageContainer, CardImage};