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
  const [mode, setMode] = useState("sign in");

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
      {/* <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
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
      </div> */}
      <div className="d-flex flex-md-row flex-row align-items-center justify-content-center m-5">
        <div
          class={`container-login ${
            mode === "sign up" && "right-panel-active"
          } `}
          id="container-login"
        >
          <div class="form-container-login sign-in-container-login">
            <form action="#" className="form-login">
              <h1 className="h1-login">Reset Password</h1>

              <span className="span-login">Enter your new password below</span>
              <input
                className="input-login"
                type="password"
                placeholder="Password"
                value={password.pass}
                onChange={(e) =>
                  setPassword({ ...password, pass: e.target.value })
                }
              />
              <input
                className="input-login"
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

              <button
                type="button"
                className="button-login"
                onClick={() => handleResetPass()}
                disabled={loading}
              >
                {loading ? "Please wait" : "Reset"}
              </button>
            </form>
          </div>
          <div class="overlay-container-login">
            <div class="overlay-login">
              <div class="overlay-panel-login overlay-right-login">
                <h1 className="h1-login">Set new password</h1>
                <p className="p-login"> Use password that is hard to guess.</p>
                <button
                  type="button"
                  className="button-login ghost"
                  id="signUp"
                  onClick={() => navigate("/")}
                >
                  Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
