import styled  from "styled-components";



const Popup = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 400px;
  background-color: #ffffff;
  transform: ${({ active }) => active ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease-in-out;
  z-index: 9999;
  @media (min-width: 320px) and (max-width: 480px) {
    width: 70%;
  }
`;

const Overlay = styled.div`
  position: fixed;
  visibility: ${({ active }) => active ? 'visible' : 'hidden'};
  opacity: ${({ active }) => active ? '0.8' : '0'};
  background-color: black;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  transition: 0.3s all;
  z-index: 9999;

`;

const NavBarPopupHeader = styled.div`
  width: 100%;
  height: 15%;
  background-color: #000000;
`;

const NavBarPopupImg = styled.div`
  position: relative;
  top:15%;
  width: 80px;
  height: 80px;
  margin: 0 auto;
  border-radius: 50px;
  border: none;
  background-color: white;
  color: black;
  font-size: 55px;
  font-weight:600;
  text-align: center;
  @media (min-width: 320px) and (max-width: 768px) {
    top:25%;
    width: 60px;
    height: 60px;
    font-size: 45px;
  }
`;

const NavBarPopupClose = styled.img`
  position: absolute;
  top: 5px;
  left: 5px;
  cursor: pointer;
`;

const NavBarPopupContent = styled.div`
  height: 75%;
`;

const NavBarPopupTitle = styled.h3`
  margin:0;
  padding: 10px 0 10px 0;
  text-align: center;
  font-size: 30px;
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 20px;
  }
`

const NavBarPopupInfo = styled.h4`
  width: 80%;
  margin: 10px auto;
  padding:20px 0 ;
  text-align: center;
  font-size: 35px;
  background-color: black;
  color:white;
  border-radius: 15px;
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 25px;
  }
`

const NavBarPopupContentImg = styled.img`
  position: absolute;
  bottom:10%;
  width:100%;
  @media (min-width: 320px) and (max-width: 768px) {
    height: 40%;
    object-fit:cover;
  }
` 

const NavBarPopupFooter = styled.div`
  width: 100%;
  height: 10%;
  background-color: #000000;
`;

const NavBarPopupSignOut = styled.p`
  width:200px;
  text-align: center;
  margin: 0 auto;
  padding: 15px 0 0 0;
  font-weight: 700;
  font-size: 32px;
  color: white;
  text-decoration: underline;
  cursor: pointer;
  @media (min-width: 320px) and (max-width: 480px) {
    padding: 25px 0 0 0;
    font-size: 25px;
  }
`;

export {
  Popup,
  Overlay,
  NavBarPopupHeader,
  NavBarPopupImg,
  NavBarPopupClose,
  NavBarPopupContent,
  NavBarPopupTitle,
  NavBarPopupInfo,
  NavBarPopupContentImg,
  NavBarPopupFooter,
  NavBarPopupSignOut
};
