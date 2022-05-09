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
`;

const NavBarPopupHeader = styled.div`
  width: 100%;
  height: 15%;
  background-color: #000000;
`;

const NavBarPopupContainer = styled.p`
  text-align: center;
  margin: 0;
  padding: 30px 0 0 0;
`;

const NavBarPopupImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50px;
  border: none;
  background-color: white;
  color: black;
  font-size: 25px;
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
`

const NavBarPopupInfo = styled.h4`
  width: 80%;
  margin: 10px auto;
  padding:5px;
  text-align: center;
  font-size: 25px;
  background-color: black;
  color:white;
  border-radius: 15px;
  
`

const NavBarPopupContentImg = styled.img`
  width:100%;
  margin-top:95px;
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
`;

export {
  Popup,
  Overlay,
  NavBarPopupHeader,
  NavBarPopupContainer,
  NavBarPopupImg,
  NavBarPopupClose,
  NavBarPopupContent,
  NavBarPopupTitle,
  NavBarPopupInfo,
  NavBarPopupContentImg,
  NavBarPopupFooter,
  NavBarPopupSignOut
};
