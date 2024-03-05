import React, { useState } from "react";
import "./signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UseDispatch, useDispatch } from "react-redux";
import { authActions } from "../../store/Index";
const Signin = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const sumbit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:1000/api/v1/signin", inputs)
      .then((response) => {
        sessionStorage.setItem("id", response.data.user._id);
        dispatch(authActions.login());
        history("/todo");
      });
  };
  return (
    <div className="signup">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 column d-flex justify-content-center align-items-center column">
            <div className="d-flex flex-column w-100 p-5">
              <input
                className="p-2 my-3"
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={inputs.email}
                onChange={change}
              />
              <input
                className="p-2 my-3"
                type="password"
                name="password"
                placeholder="Enter Your Password"
                value={inputs.password}
                onChange={change}
              />
              <button className="btn-signup p-2" onClick={sumbit}>
                SigIn
              </button>
            </div>
          </div>
          <div className="col-lg-4 col-left d-flex justify-content-center align-items-center column">
            <h1 className="text-center sign-up-heading">
              Sign <br />
              In
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
