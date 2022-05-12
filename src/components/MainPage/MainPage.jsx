import { BrowserRouter, Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import NavBar from "../NavBar/Navbar";
import AboutUs from "../AboutUs/AboutUs";
import MyTrainings from "../MyTrainings/MyTrainings";
import Cards from "../Cards/Cards";
import LoginPage from "../LoginPage/LoginPage";
import Loader from "../Loader/Loader";

function MainPage({ loaded, token }) {
  return (
    <>
      {loaded ? (
        <Loader />
      ) : (
        <>
          {token.token ? (
            <LoginPage />
          ) : (
            <BrowserRouter>
              <NavBar />
              <Routes>
                <Route
                  exact
                  path="/MyTrainings"
                  element={<MyTrainings />}
                ></Route>
                <Route index exact path="/Cards" element={<Cards />}></Route>
                <Route exact path="/AboutUs" element={<AboutUs />}></Route>
                <Route path="*" element={<Cards />} />
              </Routes>
            </BrowserRouter>
          )}
        </>
      )}
    </>
  );
}
const mapStateToProps = (state) => ({
  loaded: state.loaded,
  token: state.token,
});
export default connect(mapStateToProps)(MainPage);
