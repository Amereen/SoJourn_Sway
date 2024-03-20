import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container-fluid footer py-5">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item d-flex flex-column">
              <h4 className="mb-4 text-white">Get In Touch</h4>
              <Link>
                <FaHome className="me-2" /> 123 Street, New York, USA
              </Link>
              <Link>
                <i className="fas fa-envelope me-2" /> info@example.com
              </Link>
              <Link>
                <i className="fas fa-phone me-2" /> +012 345 67890
              </Link>
              <Link className="mb-3">
                <i className="fas fa-print me-2" /> +012 345 67890
              </Link>
              <div className="d-flex align-items-center">
                <i className="fas fa-share fa-2x text-white me-2" />
                <Link
                  className="btn-square btn btn-primary rounded-circle mx-1"
                  href=""
                >
                  <i className="fab fa-facebook-f" />
                </Link>
                <Link
                  className="btn-square btn btn-primary rounded-circle mx-1"
                  href=""
                >
                  <i className="fab fa-twitter" />
                </Link>
                <Link
                  className="btn-square btn btn-primary rounded-circle mx-1"
                  href=""
                >
                  <i className="fab fa-instagram" />
                </Link>
                <Link
                  className="btn-square btn btn-primary rounded-circle mx-1"
                  href=""
                >
                  <i className="fab fa-linkedin-in" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item d-flex flex-column">
              <h4 className="mb-4 text-white">Company</h4>
              <Link>
                <i className="fas fa-angle-right me-2" /> About
              </Link>
              <Link>
                <i className="fas fa-angle-right me-2" /> Careers
              </Link>
              <Link>
                <i className="fas fa-angle-right me-2" /> Blog
              </Link>
              <Link>
                <i className="fas fa-angle-right me-2" /> Press
              </Link>
              <Link>
                <i className="fas fa-angle-right me-2" /> Gift Cards
              </Link>
              <Link>
                <i className="fas fa-angle-right me-2" /> Magazine
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item d-flex flex-column">
              <h4 className="mb-4 text-white">Support</h4>
              <Link>
                <i className="fas fa-angle-right me-2" /> Contact
              </Link>
              <Link>
                <i className="fas fa-angle-right me-2" /> Legal Notice
              </Link>
              <Link>
                <i className="fas fa-angle-right me-2" /> Privacy Policy
              </Link>
              <Link>
                <i className="fas fa-angle-right me-2" /> Terms and Conditions
              </Link>
              <Link>
                <i className="fas fa-angle-right me-2" /> Sitemap
              </Link>
              <Link>
                <i className="fas fa-angle-right me-2" /> Cookie policy
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item">
              
              <div className="footer-bank-card">
                <Link href="#" className="text-white me-2">
                  <i className="fab fa-cc-amex fa-2x" />
                </Link>
                <Link href="#" className="text-white me-2">
                  <i className="fab fa-cc-visa fa-2x" />
                </Link>
                <Link href="#" className="text-white me-2">
                  <i className="fas fa-credit-card fa-2x" />
                </Link>
                <Link href="#" className="text-white me-2">
                  <i className="fab fa-cc-mastercard fa-2x" />
                </Link>
                <Link href="#" className="text-white me-2">
                  <i className="fab fa-cc-paypal fa-2x" />
                </Link>
                <Link href="#" className="text-white">
                  <i className="fab fa-cc-discover fa-2x" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
