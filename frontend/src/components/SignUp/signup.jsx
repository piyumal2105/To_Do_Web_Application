import React, { useState } from "react";
import axios from "axios";
import "./signup.css";
import { useNavigate } from "react-router-dom";
import HeadingComp from "./headingComp";

const SignUp = () => {
  const history = useNavigate();
  const [Inputs, setInputs] = useState({
    email: "",
    username: "",
    password: "",
  });
  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };
  const submit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:1000/api/v1/register", Inputs)
      .then((responce) => {
        if (responce.data.message === "User Already Exsits") {
          alert(responce.data.message);
        } else {
          alert(responce.data.message);
          setInputs({
            email: "",
            username: "",
            password: "",
          });
          history("/signin");
        }
      });
  };
  return (
    <div className="signup">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 column d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column w-100 p-5">
              <input
                className="p-2 my-4 input-signup"
                type="email"
                name="email"
                placeholder="Enter Your Email"
                onChange={change}
                value={Inputs.email}
              />
              <input
                className="p-2 my-4 input-signup"
                type="username"
                name="username"
                placeholder="Enter Your Username"
                onChange={change}
                value={Inputs.username}
              />
              <input
                className="p-2 my-4 input-signup"
                type="password"
                name="password"
                placeholder="Enter Your Password"
                onChange={change}
                value={Inputs.password}
              />
              <div>
                <button className="btn-signup p-2 my-3" onClick={submit}>
                  SignUp
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 column col-left d-flex justify-content-center align-items-center">
            <HeadingComp first="Sign" second="Up" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
