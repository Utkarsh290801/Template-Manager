import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginModal from "./component/Login/LoginModal";
import Banner from "./component/Home/Banner";
import { AppProvider } from "./context/AppContext";
import { useState } from "react";
import ServiceForm from "./component/Admin/ServiceForm";
import Services from "./component/User/Services/Services";
import AdminAuthorisor from "./context/AdminAuth";
import UserAuthorisor from "./context/UserAuth";
import Main from "./component/Dashboard/Dashboard";
import NotFound from "./component/NotFound/NotFound";
import ResetPassword from "./component/Login/ResetPassword";
import InternshipApply from "./component/User/Services/InternshipApply";
import User from "./component/User";
import Contact from "./component/User/Contact/Contact";
import About from "./component/About/About";
import Admin from "./component/Admin";

function App() {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  return (
    <div>
      <AppProvider currentUser={currentUser}>
        <BrowserRouter>
          <Routes>
            <Route path="" element={<Banner />} />
            <Route path="/login" element={<LoginModal />} />

            <Route
              element={
                <AdminAuthorisor>
                  <Admin />
                </AdminAuthorisor>
              }
              path="admin"
            >
              <Route element={<ServiceForm />} path="addservice" />
            </Route>
            <Route path="reset" element={<ResetPassword />} />
            <Route element={<NotFound></NotFound>} path="notfound" />
            <Route
              path="/dashboard/*"
              element={
                <UserAuthorisor>
                  <Main />
                </UserAuthorisor>
              }
            />
            <Route path="user" element={<User />}>
              <Route path="service" element={<Services />} />
              <Route path="contact" element={<Contact />} />
              <Route path="about" element={<About />} />
              <Route
                path="apply/:id"
                element={
                  <UserAuthorisor>
                    <InternshipApply />
                  </UserAuthorisor>
                }
              />
            </Route>

            <Route element={<Navigate to="/notfound" />} path="*" />
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </div>
  );
}

export default App;
