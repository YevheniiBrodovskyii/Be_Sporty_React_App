import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setStatus } from "../../store/statusMessage.js";
import NavBar from "../NavBar/Navbar";
import AboutUs from "../AboutUs/AboutUs";
import MyTrainings from "../MyTrainings/MyTrainings";
import Cards from "../Cards/Cards";
import LoginPage from "../LoginPage/LoginPage";
import StatusPopup from "../StatusPopup/StatusPopup";

function MainPage() {
  const data = useSelector((state) => state.data.data);
  const statusMessage = useSelector((state) => state.status.status);

  const dispatch = useDispatch();

  useEffect(() => {
    if (statusMessage !== "") {
      setTimeout(() => {
        dispatch(setStatus(""));
      }, 3000);
    }
  }, [dispatch, statusMessage]);

  return (
    <>
      {!data.token ? (
        <LoginPage />
      ) : (
        <>
          <StatusPopup message={statusMessage} />
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route
                exact
                path="/MyTrainings"
                element={<MyTrainings active={true} />}
              ></Route>
              <Route index exact path="/Cards" element={<Cards />}></Route>
              <Route exact path="/AboutUs" element={<AboutUs />}></Route>
              <Route path="*" element={<Cards />} />
            </Routes>
          </BrowserRouter>
        </>
      )}
    </>
  );
}

export default MainPage;
