import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/navbar/footer/Footer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/navbar/home/Home";
import About from "./components/about/About";
import Signup from "./components/signup/Signup";
import Signin from "./components/signup/Signin";
import Todo from "./components/todo/Todo";
import { useEffect } from "react";
import { UseDispatch, useDispatch } from "react-redux";
import { authActions } from "./store/Index";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("Stored id:", sessionStorage.getItem("id"));
    const  storedId = sessionStorage.getItem("id");
    if(storedId) {
      dispatch(authActions.login())
    }
  }, []);
  const handleLogout = () => {
    sessionStorage.removeItem("id");
    dispatch(authActions.logout());
  };
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/todo" element={<Todo />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/signin" element={<Signin />}></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
