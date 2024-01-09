import React from "react";
import "./signup.css";
import HeadingComp from "./headingComp";

const SignUp = () => {
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
              />
              <input
                className="p-2 my-4 input-signup"
                type="username"
                name="username"
                placeholder="Enter Your Username"
              />
              <input
                className="p-2 my-4 input-signup"
                type="password"
                name="password"
                placeholder="Enter Your Password"
              />
              <div>
                <button className="btn-signup p-2 my-3">SignUp</button>
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
