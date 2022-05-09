import {
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
  NavBarPopupSignOut,
} from "./styled.js";

function NavBarPopup(props) {
  const { popupOpen, isPopupOpen } = props;

  return (
    <>
      <Overlay onClick={() => isPopupOpen(false)} active={popupOpen}></Overlay>
      <Popup active={popupOpen}>
        <NavBarPopupHeader>
          <NavBarPopupClose
            src="./assets/close_white.svg"
            alt="close"
            onClick={() => {
              isPopupOpen(false);
            }}
          />
          <NavBarPopupContainer>
            <NavBarPopupImg />
          </NavBarPopupContainer>
        </NavBarPopupHeader>
        <NavBarPopupContent>
          <NavBarPopupTitle>You are logged as</NavBarPopupTitle>
          <NavBarPopupInfo>'UserName'</NavBarPopupInfo>
          <NavBarPopupInfo>'Email'</NavBarPopupInfo>
          <NavBarPopupContentImg src="./assets/popup_img.png" />
        </NavBarPopupContent>
        <NavBarPopupFooter>
          <NavBarPopupSignOut>Sign Out...</NavBarPopupSignOut>
        </NavBarPopupFooter>
      </Popup>
    </>
  );
}

export default NavBarPopup;
