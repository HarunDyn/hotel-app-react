import React, { useState, useContext, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import AuthContext from "../context/AuthProvider";
import { warnNoteCenter, successNote } from "../helpers/toasNotify";
import { useNavigate } from "react-router-dom";

function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [emailError, setemailError] = useState("");
  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleValidation = (event) => {
    let formIsValid = true;

    if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      formIsValid = false;
      setemailError("Email Not Valid");
      return false;
    } else {
      setemailError("");
      formIsValid = true;
    }

    if (
      !password.match(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
      )
    ) {
      formIsValid = false;
      setpasswordError(
        "Only Letters and length must best min 8 Chracters and Max 22 Chracters"
      );
      return false;
    } else {
      setpasswordError("");
      formIsValid = true;
    }

    return formIsValid;
  };

  const loginSubmit = async (e) => {
    e.preventDefault();
    const url = "https://www.icibot.net/p_login";
    handleValidation();
    try {
      let res = await axios.post(
        url,
        JSON.stringify({
          username: email,
          password: password,
          hotel_id: 3,
        }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      const accesToken = res?.data?.token_val;
      const pic = res?.data?.profile_pic_url;

      successNote("Successfully login");

      localStorage.setItem(
        "user",
        JSON.stringify({ email, password, accesToken, pic })
      );

      setAuth({ email, password, accesToken, pic });
      setEmail("");
      setPassword("");
      navigate("/");
    } catch (err) {
      if (!err?.response) {
        warnNoteCenter("No Server Response");
      } else if (err.response?.status === 401) {
        warnNoteCenter("Unauthorized");
      } else {
        warnNoteCenter("Login Failed");
      }
    }
  };

  useEffect(() => {
    console.log(auth);
  }, [auth]);

  return (
    <div className="App mt-5">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-4">
            <form id="loginform" href="/" onSubmit={loginSubmit}>
              <div className="form-group mb-4">
                <label className="mb-2">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="EmailInput"
                  name="EmailInput"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                />
                <small id="emailHelp" className="text-danger form-text">
                  {emailError}
                </small>
              </div>
              <div className="form-group mb-2">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  onChange={(event) => setPassword(event.target.value)}
                />
                <small id="passworderror" className="text-danger form-text">
                  {passwordError}
                </small>
              </div>
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label">Check me out</label>
              </div>
              <button type="submit" className="btn btn-primary col-md-12">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
