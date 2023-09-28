import React, { useState } from "react";
import "../../../scss/auth.scss";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { userAxiosInstance } from "src/config";

const ForgotPassword = () => {
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState("sign up");

  const navigate = useNavigate();

  let tabChange = function (val) {
    let ele = document.querySelectorAll(".tab-class");
    if (ele[val - 1].value != "") {
      ele[val]?.focus();
    } else if (ele[val - 1].value == "") {
      ele[val - 2]?.focus();
    }
    let valid = Array.from(ele)?.filter((item) => item?.value === "");
    if (valid?.length === 0) {
      let otp = Array.from(ele)?.map((item) => item?.value);
      setOtp(otp?.join(""));
    } else {
      setOtp(null);
    }
  };
  const handleForgotEmail = async () => {
    if (
      email &&
      email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      setLoading(true);
      try {
        const response = await userAxiosInstance.get(
          `/auth/sendOTP?email=${email}`
        );

        if (response.data) {
          toast.success("Otp sent successfully!", {
            duration: 2000,
          });

          setMode("sign in");
        }
      } catch (error) {
        toast.error(
          error?.response?.data?.message ||
            "Something went wrong! Please try again later.",
          {
            duration: 2000,
          }
        );
        console.log("error", error);
      }
      setLoading(false);
    } else {
      toast.error("Please enter valid email!", {
        duration: 2000,
      });
    }
  };
  const handleVerifyOtp = async () => {
    if (otp && otp.length === 6) {
      setLoading(true);
      try {
        const response = await userAxiosInstance.get(
          `/auth/verifyOTP?otp=${otp}`
        );

        if (response.data) {
          toast.success("Otp verified successfully!", {
            duration: 2000,
          });

          // setStep(2);
          navigate(`/reset-password?id=${response.data?.data}`);
        }
      } catch (error) {
        toast.error(
          error?.response?.data?.message ||
            "Something went wrong! Please try again later.",
          {
            duration: 2000,
          }
        );
        console.log("error", error);
      }
      setLoading(false);
    } else {
      toast.error("Please enter valid otp!", {
        duration: 2000,
      });
    }
  };

  return (
    <>
      {/* {step === 1 ? (
        <div>
          <h1 className="forgot-h1">Forgot your password?</h1>
          <div className="hr-div">
            <hr className="forgot-hr"></hr>
          </div>

          <form
            action="index.html"
            method="post"
            className="forgot-form container-fluid bg-body-tertiary d-block"
          >
            <label className="forgot-label" for="mail">
              Email
            </label>
            <br className="forgot-br" />
            <input
              type="email"
              id="name"
              name="name"
              placeholder="Enter your email address"
              required
              className="forgot-input"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <button
              className="forgot-button"
              type="button"
              onClick={() => handleForgotEmail()}
              disabled={loading}
            >
              {loading ? "Please wait" : "Submit"}
            </button>
            <span
              className="forgot-span"
              id="nameError"
              style={{ display: "none" }}
            >
              There was an error with your email
            </span>
          </form>
        </div>
      ) : (
        <div className="container-fluid bg-body-tertiary d-block">
          <div className="row justify-content-center">
            <div
              className="col-12 col-md-6 col-lg-4"
              style={{ minWidth: "500px" }}
            >
              <div
                className="card bg-white mb-5 mt-5 border-0"
                style={{ boxShadow: "0 12px 15px rgba(0, 0, 0, 0.02)" }}
              >
                <div className="card-body p-5 text-center">
                  <h4>Verify</h4>
                  <p>Your code was sent to you via email</p>

                  <div className="otp-field mb-4">
              
                    {[1, 2, 3, 4, 5, 6].map((item, index) => (
                      <input
                        key={index}
                        className="tab-class"
                        type="text"
                        name=""
                        id=""
                        maxLength={1}
                        onKeyUp={(e) => tabChange(item)}
                      />
                    ))}
                  </div>

                  <button
                    className="btn btn-primary mb-3 veify-otp"
                    type="button"
                    onClick={() => handleVerifyOtp()}
                    disabled={loading}
                  >
                    {loading ? "Please wait" : "Verify"}
                  </button>

                  <p className="resend text-muted mb-0">
                    Didn't receive code?{" "}
                    <a href="/forgot-password">Request again</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )} */}
      <div className="d-flex flex-md-row flex-row align-items-center justify-content-center m-5">
        <div
          class={`container-login ${
            mode === "sign up" && "right-panel-active"
          } `}
          id="container-login"
        >
          <div class="form-container-login sign-up-container-login">
            <form action="#" className="form-login">
              <h1 className="h1-login">Forgot Password</h1>

              <span className="span-login">Enter your email below</span>
              <input
                className="input-login"
                type="text"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />

              <button
                type="button"
                className="button-login"
                onClick={() => handleForgotEmail()}
                disabled={loading}
              >
                {loading ? "Please wait" : "Send Reset Email"}
              </button>
            </form>
          </div>
          <div class="form-container-login sign-in-container-login">
            <form action="#" className="form-login">
              <h1 className="h1-login">OTP Verification</h1>

              <span className="span-login">Enter six digit OTP below</span>
              <div className="otp-field mb-4">
                {[1, 2, 3, 4, 5, 6].map((item, index) => (
                  <input
                    key={index}
                    className="tab-class input-login"
                    type="text"
                    name=""
                    id=""
                    maxLength={1}
                    onKeyUp={(e) => tabChange(item)}
                  />
                ))}
              </div>

              <button
                type="button"
                className="button-login"
                onClick={() => handleVerifyOtp()}
                disabled={loading}
              >
                {loading ? "Please wait" : "Verify"}
              </button>
            </form>
          </div>
          <div class="overlay-container-login">
            <div class="overlay-login">
              <div class="overlay-panel-login overlay-left-login">
                <h1 className="h1-login">Welcome Back!</h1>
                <p className="p-login">
                  Enter the email associated with your account and we will send
                  an email with OTP to recover your password. Or if you remeber
                  your credential sign in here.
                </p>
                <button
                  type="button"
                  className="button-login ghost"
                  id="signIn"
                  onClick={() => navigate("/login")}
                >
                  Sign In
                </button>
              </div>
              <div class="overlay-panel-login overlay-right-login">
                <h1 className="h1-login">Didn't receive OTP!</h1>
                <p className="p-login">
                  {" "}
                  Don't worry, You can still request it again.
                </p>
                <button
                  type="button"
                  className="button-login ghost"
                  id="signUp"
                  onClick={() => setMode("sign up")}
                >
                  Request again
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
