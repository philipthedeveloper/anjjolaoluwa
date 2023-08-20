import { Routes, Route, Outlet } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import MainDashboard from "../components/MainDashboard";
import SideNav from "../components/SideNav";
import Students from "../pages/Students";
import Results from "../pages/Results";
import Attendance from "../pages/Attendance";
import Teachers from "../pages/Teachers";
import Classes from "../pages/Classes";
import Chat from "../pages/Chat";

const Router = ({ children }) => {
  return (
    <>
      {children}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route
          element={
            <>
              <SideNav />
              <Outlet />
            </>
          }
        >
          <Route path="/dashboard" index element={<MainDashboard />} />
          <Route path="/students" element={<Students />} />
          <Route path="/results" element={<Results />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="*" element={<Chat />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
