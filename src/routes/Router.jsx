import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import MainDashboard from "../components/MainDashboard";
import Students from "../pages/Students";
import Results from "../pages/Results";
import Attendance from "../pages/Attendance";
import Teachers from "../pages/Teachers";
import Classes from "../pages/Classes";
import Chat from "../pages/Chat";
import ProtectedRoute from "./protected.route";
import Subject from "../pages/Subject";
import Parents from "../pages/Parents";
import NotFound from "../pages/NotFound";
import AllChats from "../pages/AllChats";
import { useUserContext } from "../context/UserContext";
import { useEffect } from "react";
import Notice from "../pages/Notice";

const Router = ({ children }) => {
  const { user } = useUserContext();

  return (
    <>
      {children}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" index element={<MainDashboard />} />
          {user && user.accountType === "Teacher" && (
            <>
              <Route path="/students" element={<Students />} />
              <Route path="/classes" element={<Classes />} />
              <Route path="/parents" element={<Parents />} />
            </>
          )}
          <Route path="/results" element={<Results />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/subjects" element={<Subject />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/chats">
            <Route path="" element={<AllChats />} />
            <Route path=":chatId" element={<Chat />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Router;
