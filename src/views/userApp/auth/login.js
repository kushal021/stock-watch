import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import { cilLockLocked, cilUser } from "@coreui/icons";
import axios from "axios";
import { adminAxiosInstance, userAxiosInstance } from "src/config";
import { toast } from "react-hot-toast";
import "../../../scss/home.scss";
import { useGoogleLogin } from "@react-oauth/google";

const Login = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await userAxiosInstance.post("/auth/login", {
        email,
        password,
      });
      toast.success("Signin Successfully!", {
        duration: 2000,
      });
      localStorage.setItem("uID", response?.data?.data?.token);
      localStorage.setItem(
        "userData",
        JSON.stringify({
          fName: response?.data?.data?.first_name,
          lName: response?.data?.data?.last_name,
        })
      );
      navigate("/");
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
  };
  const responseGoogle = async (responseGoogle) => {
    console.log("response of google", responseGoogle);
    if (responseGoogle?.access_token) {
      // let googleValues = {
      //   tokenId: response?.access_token,
      //   type: "google",
      // };
      setLoading(true);
      try {
        const response = await userAxiosInstance.post("/auth/login", {
          token: responseGoogle?.access_token,
        });
        if (response.data) {
          toast.success("Signin Successfully!", {
            duration: 2000,
          });
          localStorage.setItem("uID", response?.data?.data?.token);
          localStorage.setItem(
            "userData",
            JSON.stringify({
              fName: response?.data?.data?.first_name,
              lName: response?.data?.data?.last_name,
            })
          );
          navigate("/");
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
      // HANDLE_LOGIN(googleValues).then((res) => {
      //   console.log("resssss in component", res);
      //   if(res?.success){
      //     createCookie("b2bUserID", res?.data?.data?.accessToken);
      //     createCookie("refreshToken", res?.data?.data?.refreshToken);
      //     router.push("/");
      //   }
      // });
    } else {
      toast.error("Something went wrong! Please try again later.", {
        duration: 2000,
      });
    }
  };
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => responseGoogle(tokenResponse),
    onError: (error) => responseGoogle(error),
    // flow: "implicit",
  });

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">
                      Sign In to your account
                    </p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="Email"
                        autoComplete="username"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </CInputGroup>
                    <CRow className="text-right">
                      <CCol xs={6}>
                        <CButton
                          color="primary"
                          className="px-4"
                          onClick={() => handleLogin()}
                          disabled={loading}
                        >
                          {loading ? "Please wait" : "Login"}
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
                <button class="google-button" onClick={login} type="button">
                  <div class="google-icon-wrapper">
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="18px"
                      height="18px"
                      viewBox="0 0 48 48"
                    >
                      <g>
                        <path
                          fill="#EA4335"
                          d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                        ></path>
                        <path
                          fill="#4285F4"
                          d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                        ></path>
                        <path
                          fill="#FBBC05"
                          d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                        ></path>
                        <path
                          fill="#34A853"
                          d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                        ></path>
                        <path fill="none" d="M0 0h48v48H0z"></path>
                      </g>
                    </svg>
                  </div>
                  <p class="google-button-text">Sign in with Google</p>
                </button>
                <Link to="/forgot-password">Forgot password ?</Link>
              </CCard>
              <CCard
                className="text-white bg-primary py-5"
                style={{ width: "44%" }}
              >
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>Don't have an account? Please register here.</p>
                    <Link to="/register">
                      <CButton
                        color="primary"
                        className="mt-3"
                        active
                        tabIndex={-1}
                      >
                        Register Now!
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
  );
};

export default Login;
