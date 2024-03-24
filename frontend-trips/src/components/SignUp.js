import { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { useCreateUserMutation } from "../services/auth";
import toast from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();
  const [createUser] = useCreateUserMutation();
  const [inProp, setInProp] = useState(false);
  const [signupForm, setSignupForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    setInProp(true);
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    const { error, data } = await createUser(signupForm);
    if (data) {
      navigate("/login");
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
              classNames="Signup"
              unmountOnExit
            >
              <div className="card">
                <div className="card-body">
                  <Link className=" " to={"/"}>
                    <FaHome className="me-2" /> Go to home page...
                  </Link>
                  <h2 className="card-title text-center mb-4">Signup</h2>
                  <form onSubmit={onSubmit}>
                    <div className="mb-3">
                      <label htmlFor="username" className="form-label">
                        Username
                      </label>
                      <input
                        name="username"
                        type="text"
                        id="username"
                        className="form-control"
                        placeholder="Enter your username"
                        required
                        value={signupForm.username}
                        onChange={(e) =>
                          setSignupForm({
                            ...signupForm,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                    </div>
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
                        value={signupForm.email}
                        onChange={(e) =>
                          setSignupForm({
                            ...signupForm,
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
                        value={signupForm.password}
                        onChange={(e) =>
                          setSignupForm({
                            ...signupForm,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">
                      Signup
                    </button>
                    <Link className=" ms-2 " to={"/login"}>
                      or Login
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

export default Signup;
