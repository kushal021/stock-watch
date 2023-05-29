import React, { useState } from "react";
import { adminAxiosInstance, userAxiosInstance } from "src/config";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [emailError, setemailError] = useState("");
  const [loading, setLoading] = useState(false);
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

    // if (!password.match(/^[a-zA-Z]{8,22}$/)) {
    //   formIsValid = false;
    //   setpasswordError(
    //     "Password should contain only Letters and length must be min 8 Chracters and Max 22 Chracters"
    //   );
    //   return false;
    // } else {
    //   setpasswordError("");
    //   formIsValid = true;
    // }

    return formIsValid;
  };

  const loginSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // let formValid = handleValidation();
    // console.log("form valid=====<", formValid);
    // if (formValid) {
    try {
      const response = await adminAxiosInstance.post("/auth/login", {
        email,
        password,
      });
      toast.success("Signin Successfully!", {
        duration: 2000,
      });
      localStorage.setItem("aID", response?.data?.data?.token);
      navigate("/admin");
      // console.log("response===>", response);
    } catch (error) {
      console.log("error", error);
      toast.error(
        error?.response?.data?.message ||
          "Something went wrong! Please try again later.",
        {
          duration: 2000,
        }
      );
    }
    setLoading(false);
    // }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-4">
            <form id="loginform" onSubmit={loginSubmit}>
              <div className="form-group">
                <label>Email address</label>
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
              <div className="form-group">
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
              <button
                type="submit"
                className="btn btn-primary my-2"
                disabled={loading}
              >
                {loading ? "Please wait" : "Submit"}
              </button>
              {/* <div className="form-group">
                <p className="form-text">
                  {" "}
                  Don't have an Acoount ?{" "}
                  <Link to="/sign-up">Sign-up Here</Link>{" "}
                </p>
              </div> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
