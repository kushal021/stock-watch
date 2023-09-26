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

          setStep(2);
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
      {step === 1 ? (
        <div>
          <h1 className="forgot-h1">Forgot your password?</h1>
          <div className="hr-div">
            <hr className="forgot-hr"></hr>
          </div>
          {/* <h3 className="forgot-h3">
        Enter your email address to reset your password
      </h3> */}

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
                    {/* <input type="number" />
                    <input type="number" disabled />
                    <input type="number" disabled />
                    <input type="number" disabled />
                    <input type="number" disabled />
                    <input type="number" disabled /> */}
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
      )}
    </>
  );
};

export default ForgotPassword;
