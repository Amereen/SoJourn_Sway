import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Destination from "./components/Destination";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import NotFound from "./components/404";
import Activity from "./components/Activity";
import Trip from "./components/Trip";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Destination />} />
          <Route path="contact" element={<>home</>} />
          <Route path="activities" element={<Activity />} />
          <Route path="trips" element={<Trip />} />

          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
