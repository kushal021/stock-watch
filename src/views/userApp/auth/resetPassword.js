import React, { useState } from "react";
import "../../../scss/reset-password.scss";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilLockLocked } from "@coreui/icons";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import toast from "react-hot-toast";
import { userAxiosInstance } from "src/config";

const ResetPassword = () => {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState({
    pass: "",
    confirmPass: "",
  });

  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();

  const handleResetPass = async () => {
    if (password.confirmPass && password.pass) {
      if (password.pass === password.confirmPass) {
        setLoading(true);
        try {
          const response = await userAxiosInstance.get(
            `/auth/forgotPassword?password=${password.pass}`,
            {
              headers: {
                Authorization: `Bearer ${params.get("id")}`,
              },
            }
          );
          if (response.data) {
            toast.success("Password reset successfully!", {
              duration: 2000,
            });

            navigate("/login");
          }
          // console.log("email, pass", response);
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
        toast.error("Password and confirm password must be same!", {
          duration: 2000,
        });
      }
    } else {
      toast.error("Please enter values properly!", {
        duration: 2000,
      });
    }
  };
  return (
    <>
      {/* <div class="container-resetpass " id="container-resetpass">
        <div class="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            <div class="social-container">
              <a href="#" class="social">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="social">
                <i class="fab fa-google-plus-g"></i>
              </a>
              <a href="#" class="social">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
          </form>
        </div>
        <div class="form-container sign-in-container">
          <form action="#">
            <h1>Sign in</h1>
            <div class="social-container">
              <a href="#" class="social">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="social">
                <i class="fab fa-google-plus-g"></i>
              </a>
              <a href="#" class="social">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button class="ghost" id="signIn">
                Sign In
              </button>
            </div>
            <div class="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button class="ghost" id="signUp">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div> */}
      <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md={8}>
              <CCardGroup>
                <CCard className="p-4">
                  <CCardBody>
                    <CForm>
                      <h1>Reset password</h1>
                      <p className="text-medium-emphasis">
                        Please fill your details below
                      </p>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>
                          <CIcon icon={cilLockLocked} />
                        </CInputGroupText>
                        <CFormInput
                          placeholder="Password"
                          type="password"
                          value={password.pass}
                          onChange={(e) =>
                            setPassword({ ...password, pass: e.target.value })
                          }
                        />
                      </CInputGroup>
                      <CInputGroup className="mb-4">
                        <CInputGroupText>
                          <CIcon icon={cilLockLocked} />
                        </CInputGroupText>
                        <CFormInput
                          type="password"
                          placeholder="Confirm Password"
                          value={password.confirmPass}
                          onChange={(e) =>
                            setPassword({
                              ...password,
                              confirmPass: e.target.value,
                            })
                          }
                        />
                      </CInputGroup>
                      <CRow className="text-right">
                        <CCol xs={6}>
                          <CButton
                            color="primary"
                            className="px-4"
                            onClick={() => handleResetPass()}
                            disabled={loading}
                          >
                            {loading ? "Please wait" : "Reset"}
                          </CButton>
                        </CCol>
                        <CCol xs={6} className="text-right">
                          {/* <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton> */}
                        </CCol>
                        <CCol xs={6} className="text-right"></CCol>
                      </CRow>
                    </CForm>
                  </CCardBody>
                </CCard>
                <CCard
                  className="text-white  bg-primary py-5"
                  style={{ width: "44%" }}
                >
                  <CCardBody className="text-center">
                    <div>
                      <h2>Browse strategies</h2>
                      <p>
                        You don't need account to browse through our content.
                      </p>
                      <Link to="/">
                        <CButton
                          color="primary"
                          className="mt-3"
                          active
                          tabIndex={-1}
                        >
                          Home
                        </CButton>
                      </Link>
                    </div>
                  </CCardBody>
                </CCard>
              </CCardGroup>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    </>
  );
};

export default ResetPassword;
