import React, { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { useLoginUserMutation } from "../services/auth";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const [loginUser] = useLoginUserMutation();
  const [inProp, setInProp] = useState(false);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    setInProp(true);
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    const { error, data } = await loginUser(loginForm);
    if (data) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/");
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    }
    if (error) {
      toast.error(error?.data?.error);
    }
  };

  return (
    <div className="bg-login">
      <div className="container   vh-100 ">
        <div className="justify-content-center align-items-center vh-100 d-flex">
          <div className="col-md-6">
            <CSSTransition
              in={inProp}
              timeout={300}
              classNames="login"
              unmountOnExit
            >
              <div className="card">
                <div className="card-body">
                  <Link className=" " to={"/"}>
                    <FaHome className="me-2" /> Go to home page...
                  </Link>
                  <h2 className="card-title text-center mb-4">Login</h2>
                  <form onSubmit={onSubmit}>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        name="email"
                        type="email"
                        id="email"
                        className="form-control"
                        placeholder="Enter your Email"
                        required
                        value={loginForm.email}
                        onChange={(e) =>
                          setLoginForm({
                            ...loginForm,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        className="form-control"
                        placeholder="Enter your password"
                        required
                        value={loginForm.password}
                        onChange={(e) =>
                          setLoginForm({
                            ...loginForm,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">
                      Login
                    </button>
                    <Link className=" ms-2 " to={"/signup"}>
                      or Signup
                    </Link>
                  </form>
                </div>
              </div>
            </CSSTransition>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
