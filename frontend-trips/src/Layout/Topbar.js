import { useState } from "react";
import { FaHome, FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { DropdownMenu, DropdownToggle, Dropdown } from "reactstrap";

const Topbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="container-fluid bg-primary px-5 d-none d-lg-block">
      <div className="row gx-0">
        <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0"></div>
        <div className="col-lg-4 text-center text-lg-end">
          <div
            className="d-inline-flex align-items-center"
            style={{ height: 45 }}
          >
            {!token && (
              <Link to={"signup"}>
                <small className="me-3 text-light">
                  <FaUser className="me-2" />
                  Register
                </small>
              </Link>
            )}
            {!token && (
              <Link to={"login"}>
                <small className="me-3 text-light">
                  <FaSignInAlt className="me-2" />
                  Login
                </small>
              </Link>
            )}
            { localStorage.getItem('token') &&
              <Dropdown isOpen={isOpen} toggle={() => setIsOpen(!isOpen)}>
              <DropdownToggle data-toggle="dropdown" tag="span">
                <Link className="dropdown-toggle text-light">
                  <small>
                    <FaHome className="me-2" /> My Dashboard
                  </small>
                </Link>
              </DropdownToggle>
              <DropdownMenu>
                <Link
                  onClick={() => {
                    localStorage.clear();
                    navigate("/login");
                  }}
                  className="dropdown-item"
                >
                  <FaSignOutAlt className="me-2" /> Sign out
                </Link>
              </DropdownMenu>
            </Dropdown>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
