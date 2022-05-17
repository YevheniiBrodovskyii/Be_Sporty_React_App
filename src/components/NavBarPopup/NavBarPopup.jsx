import { removeData } from "../../store/userData.js";
import {
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
  NavBarPopupSignOut,
} from "./styled.js";

function NavBarPopup(props) {
  const { popupOpen, isPopupOpen, username, pictureLetters } = props;

  // function logout() {
  //   localStorage.removeItem("data");
  // }

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
          <NavBarPopupImg>{pictureLetters}</NavBarPopupImg>
        </NavBarPopupHeader>
        <NavBarPopupContent>
          <NavBarPopupTitle>You are logged as</NavBarPopupTitle>
          <NavBarPopupInfo>{username}</NavBarPopupInfo>
          <NavBarPopupContentImg src="./assets/popup_img.png" />
        </NavBarPopupContent>
        <NavBarPopupFooter>
          <NavBarPopupSignOut onClick={() => removeData()}>
            Sign Out...
          </NavBarPopupSignOut>
        </NavBarPopupFooter>
      </Popup>
    </>
  );
}

export default NavBarPopup;
