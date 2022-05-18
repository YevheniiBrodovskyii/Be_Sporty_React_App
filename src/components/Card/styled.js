import styled from "styled-components";

const CardContent = styled.section`
    width: 400px;
    height: 400px;
    margin: 50px auto 50px auto;
    padding: 15px 5px 15px 5px;
    background-color: #ffffff;
    border-radius: 15px;
    transition: 0.5s all;
    cursor: pointer;
    &:first-child {
      margin: 50px auto 0 auto;
    }
    &:hover {
      transform : scale(105%);
    }
    @media (min-width: 320px) and (max-width: 480px) {
      width: 90%;
      height: 300px;
      margin: 50px auto 50px auto;
      padding: 10px 5px;
      &:first-child {
        margin: 150px auto 50px auto;
      }
    }
  `;

  const CardName = styled.h2`
    text-align: center;
    color: #000000;
    font-weight: 700;
    font-size: 45px;
    margin: 80px 0 0 0;
    padding: 0;
    @media (min-width: 320px) and (max-width: 480px) {
      font-size: 30px;
      margin: 20px 0 0 0;
    }
  `;

  const CardImageContainer = styled.p`
    text-align: center;
    margin: 0;
    padding: 20px 0 0 0;
  `;

  const CardImage = styled.img`
    width: 200px;
    height: 200px;
    margin: 0 auto;
  `;

export {CardContent, CardName, CardImageContainer, CardImage};