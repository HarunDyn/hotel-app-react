import { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarSection from "../components/Navbar";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/LoginPage";
import Guest from "../pages/GuestPage";
import AuthContext from "../context/AuthProvider";
import SurveyPage from "../pages/SurveyPage";
import Discount from "../components/Discount";

const AppRouter = () => {
  const { auth } = useContext(AuthContext);

  return (
    <Router>
      <Discount />
      <NavbarSection userProfile={auth} />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/quest" element={<Guest />} />
        <Route path="/survey" element={<SurveyPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
