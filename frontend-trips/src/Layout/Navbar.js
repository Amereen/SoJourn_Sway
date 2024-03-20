import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <>
      <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
          <Link className="navbar-brand p-0">
            <h1 className="m-0">
              <i className="fa fa-map-marker-alt me-3" />
              SoJournSway
            </h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              {["destination", "activities", "trips", "contact"].map((path) => (
                <Link
                  to={path === "destination" ? "/" : `/${path}`}
                  className={`nav-item nav-link text-capitalize ${
                    location.pathname ===
                    (path === "destination" ? "/" : `/${path}`)
                      ? "active"
                      : ""
                  }`}
                >
                  {path}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: 900 }}>
          <h3 className="text-white text-capitalize display-3 mb-4">
            SoJournSway{"  "}
            {location.pathname === "/"
              ? "Destination"
              : location.pathname.split("/")[1]}
          </h3>
        </div>
      </div>
    </>
  );
};

export default Navbar;
