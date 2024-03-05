import React, { useState } from "react";
import "./signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    username: "",
    password: "",
  });
  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const sumbit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:1000/api/v1/register", inputs)
      .then((response) => {
        if (response.data.message === "user already exist") {
          alert(response.data.message);
        } else {
          console.log(response);
          setInputs({ email: "", username: "", password: "" });
          history("/signin");
        }
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
                onChange={change}
                value={inputs.email}
              />
              <input
                className="p-2 my-3"
                type="username"
                name="username"
                placeholder="Enter Your UserName"
                onChange={change}
                value={inputs.username}
              />
              <input
                className="p-2 my-3"
                type="password"
                name="password"
                placeholder="Enter Your Password"
                onChange={change}
                value={inputs.password}
              />
              <button className="btn-signup p-2" onClick={sumbit}>
                SignUp
              </button>
            </div>
          </div>
          <div className="col-lg-4 col-left d-flex justify-content-center align-items-center column">
            <h1 className="text-center sign-up-heading">
              Sign <br />
              Up
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
