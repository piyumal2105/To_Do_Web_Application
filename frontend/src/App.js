import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs/aboutUs";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/home";
import Navbar from "./components/navbar/navbar";
import SignUp from "./components/SignUp/signup";
import SignIn from "./components/SignUp/signin";
import Todo from "./components/ToDo/todo";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "./store";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const id = sessionStorage.getItem("id");
    if (id) {
      dispatch(authActions.login());
    }
  }, []);
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
