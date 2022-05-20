import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import NavBar from "../NavBar/Navbar";
import AboutUs from "../AboutUs/AboutUs";
import MyTrainings from "../MyTrainings/MyTrainings";
import Cards from "../Cards/Cards";
import LoginPage from "../LoginPage/LoginPage";
import Loader from "../Loader/Loader";

function MainPage() {
  const data = useSelector((state) => state.data.data);
  const loaded = useSelector((state) => state.loaded.loaded);

  return (
    <>
      {!data.token ? (
        <LoginPage />
      ) : (
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
      )}
    </>
  );
}

export default MainPage;
