import { Outlet } from "react-router-dom";
import Topbar from "./Topbar";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
