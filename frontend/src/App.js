import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs/aboutUs";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/home";
import Navbar from "./components/navbar/navbar";
import SignUp from "./components/SignUp/signup";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/todo" element={<AboutUs />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<AboutUs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
