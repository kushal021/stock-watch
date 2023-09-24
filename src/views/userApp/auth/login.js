import React, { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
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
// import "../../../scss/home.scss";
import "../../../scss/login.scss";
import { useGoogleLogin } from "@react-oauth/google";

const Login = () => {
  const [email, setEmail] = useState("");
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState("sign in");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setLoading(true);
    console.log("formData", formData);
    if (
      !formData.email ||
      !formData.firstName ||
      !formData.lastName ||
      !formData.mobile ||
      !formData.password
    ) {
      toast("Please fill all the data!", {
        icon: "	⚠️",
      });
    } else {
      try {
        const response = await userAxiosInstance.post("/auth/register", {
          ...formData,
        });
        if (response.data) {
          toast.success("Register Successfully!", {
            duration: 3000,
          });
          setMode("sign in");
          setFormData({});
        } else {
          toast.error("Something went wrong! Please try again later.", {
            duration: 3000,
          });
        }
      } catch (err) {
        toast.error(
          err?.response?.data?.message ||
            "Something went wrong! Please try again later.",
          {
            duration: 3000,
          }
        );
        console.log("err", err);
      }
    }
    setLoading(false);
  };

  const handleLogin = async () => {
    setLoading(true);
    if (!email || !password) {
      toast("Please fill all the data!", {
        icon: "	⚠️",
      });
    } else {
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
            duration: 3000,
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
  const responseRegisterGoogle = async (responseGoogle) => {
    console.log("response of google", responseGoogle);
    if (responseGoogle?.access_token) {
      // let googleValues = {
      //   tokenId: responseGoogle?.access_token,
      //   type: "google",
      // };
      setLoading(true);
      console.log("formData", formData);

      try {
        const response = await userAxiosInstance.post("/auth/register", {
          token: responseGoogle?.access_token,
        });
        if (response.data) {
          toast.success("Register Successfully!", {
            duration: 3000,
          });
          setMode("sign in");
        } else {
          toast.error("Something went wrong! Please try again later.", {
            duration: 3000,
          });
        }
      } catch (err) {
        toast.error(
          err?.response?.data?.message ||
            "Something went wrong! Please try again later.",
          {
            duration: 3000,
          }
        );
        console.log("err");
      }
      setLoading(false);
    } else {
      toast.error("Something went wrong! Please try again later.", {
        duration: 2000,
      });
    }
  };
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) =>
      mode === "sign in"
        ? responseGoogle(tokenResponse)
        : responseRegisterGoogle(tokenResponse),
    onError: (error) =>
      mode === "sign in"
        ? responseGoogle(error)
        : responseRegisterGoogle(tokenResponse),
    // flow: "implicit",
  });

  return (
    // <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
    //   <CContainer>
    //     <CRow className="justify-content-center">
    //       <CCol md={8}>
    //         <CCardGroup>
    //           <CCard className="p-4">
    //             <CCardBody>
    //               <CForm>
    //                 <h1>Login</h1>
    //                 <p className="text-medium-emphasis">
    //                   Sign In to your account
    //                 </p>
    //                 <CInputGroup className="mb-3">
    //                   <CInputGroupText>
    //                     <CIcon icon={cilUser} />
    //                   </CInputGroupText>
    //                   <CFormInput
    //                     placeholder="Email"
    //                     autoComplete="username"
    //                     value={email}
    //                     onChange={(e) => setEmail(e.target.value)}
    //                   />
    //                 </CInputGroup>
    //                 <CInputGroup className="mb-4">
    //                   <CInputGroupText>
    //                     <CIcon icon={cilLockLocked} />
    //                   </CInputGroupText>
    //                   <CFormInput
    //                     type="password"
    //                     placeholder="Password"
    //                     autoComplete="current-password"
    //                     value={password}
    //                     onChange={(e) => setPassword(e.target.value)}
    //                   />
    //                 </CInputGroup>
    //                 <CRow className="text-right">
    //                   <CCol xs={6}>
    //                     <CButton
    //                       color="primary"
    //                       className="px-4"
    //                       onClick={() => handleLogin()}
    //                       disabled={loading}
    //                     >
    //                       {loading ? "Please wait" : "Login"}
    //                     </CButton>
    //                   </CCol>
    //                   <CCol xs={6} className="text-right">
    //                     {/* <CButton color="link" className="px-0">
    //                       Forgot password?
    //                     </CButton> */}
    //                   </CCol>
    //                   <CCol xs={6} className="text-right"></CCol>
    //                 </CRow>
    //               </CForm>
    //             </CCardBody>
    //             <button type='button' class="google-button" onClick={login} type="button">
    //               <div class="google-icon-wrapper">
    //                 <svg
    //                   version="1.1"
    //                   xmlns="http://www.w3.org/2000/svg"
    //                   width="18px"
    //                   height="18px"
    //                   viewBox="0 0 48 48"
    //                 >
    //                   <g>
    //                     <path
    //                       fill="#EA4335"
    //                       d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
    //                     ></path>
    //                     <path
    //                       fill="#4285F4"
    //                       d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
    //                     ></path>
    //                     <path
    //                       fill="#FBBC05"
    //                       d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
    //                     ></path>
    //                     <path
    //                       fill="#34A853"
    //                       d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
    //                     ></path>
    //                     <path fill="none" d="M0 0h48v48H0z"></path>
    //                   </g>
    //                 </svg>
    //               </div>
    //               <p class="google-button-text">Sign in with Google</p>
    //             </button>
    //             <Link to="/forgot-password">Forgot password ?</Link>
    //           </CCard>
    //           <CCard
    //             className="text-white bg-primary py-5"
    //             style={{ width: "44%" }}
    //           >
    //             <CCardBody className="text-center">
    //               <div>
    //                 <h2>Sign up</h2>
    //                 <p>Don't have an account? Please register here.</p>
    //                 <Link to="/register">
    //                   <CButton
    //                     color="primary"
    //                     className="mt-3"
    //                     active
    //                     tabIndex={-1}
    //                   >
    //                     Register Now!
    //                   </CButton>
    //                 </Link>
    //               </div>
    //             </CCardBody>
    //           </CCard>
    //         </CCardGroup>
    //       </CCol>
    //     </CRow>
    //   </CContainer>
    // </div>
    <div className="d-flex flex-md-row flex-row align-items-center justify-content-center m-5">
      <div
        class={`container-login ${mode === "sign up" && "right-panel-active"} `}
        id="container-login"
      >
        <div class="form-container-login sign-up-container-login">
          <form action="#" className="form-login">
            <h1 className="h1-login">Create Account</h1>
            <div class="social-container-login">
              <button type="button" class="google-signin" onClick={login}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  width="96px"
                  height="96px"
                >
                  <path
                    fill="#FFC107"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  />
                  <path
                    fill="#FF3D00"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  />
                  <path
                    fill="#4CAF50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  />
                  <path
                    fill="#1976D2"
                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                  />
                </svg>
                <span>Sign up with Google</span>
              </button>
            </div>
            <span className="span-login">
              or use your email for registration
            </span>
            <input
              className="input-login"
              type="text"
              placeholder="First name"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
            />
            <input
              className="input-login"
              type="text"
              placeholder="Last name"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
            />
            <input
              className="input-login"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <input
              className="input-login"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            <input
              className="input-login"
              type="number"
              placeholder="Mobile No."
              value={formData.mobile}
              onChange={(e) =>
                setFormData({ ...formData, mobile: e.target.value })
              }
            />
            <button
              type="button"
              className="button-login"
              disabled={loading}
              onClick={() => handleSubmit()}
            >
              {loading ? "Please wait" : "Sign Up"}
            </button>
            <button
              type="button"
              className="a-hide-login"
              onClick={() => setMode("sign in")}
            >
              Already a user? Sign in.
            </button>
          </form>
        </div>
        <div class="form-container-login sign-in-container-login">
          <form action="#" className="form-login">
            <h1 className="h1-login">Sign in</h1>
            <div class="social-container-login">
              <button type="button" class="google-signin" onClick={login}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  width="96px"
                  height="96px"
                >
                  <path
                    fill="#FFC107"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  />
                  <path
                    fill="#FF3D00"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  />
                  <path
                    fill="#4CAF50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  />
                  <path
                    fill="#1976D2"
                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                  />
                </svg>
                <span>Sign in with Google</span>
              </button>
            </div>
            <span className="span-login">or use your account</span>
            <input
              className="input-login"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="input-login"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <a className="a-login" href="/forgot-password">
              Forgot your password?
            </a>
            <button
              type="button"
              className="button-login"
              onClick={() => handleLogin()}
              disabled={loading}
            >
              {loading ? "Please wait" : "Sign In"}
            </button>
            <button
              type="button"
              className="a-hide-signup"
              onClick={() => setMode("sign up")}
            >
              New user? Sign up.
            </button>
          </form>
        </div>
        <div class="overlay-container-login">
          <div class="overlay-login">
            <div class="overlay-panel-login overlay-left-login">
              <h1 className="h1-login">Welcome Back!</h1>
              <p className="p-login">
                To keep connected with us please login with your personal info
              </p>
              <button
                type="button"
                className="button-login ghost"
                id="signIn"
                onClick={() => setMode("sign in")}
              >
                Sign In
              </button>
            </div>
            <div class="overlay-panel-login overlay-right-login">
              <h1 className="h1-login">Hello, Traders!</h1>
              <p className="p-login">
                {" "}
                Enter your personal details and start journey with us
              </p>
              <button
                type="button"
                className="button-login ghost"
                id="signUp"
                onClick={() => setMode("sign up")}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
