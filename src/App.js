import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import Users from "./components/Users/Users";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DialogContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContiner";
import Login from "./components/Login/Login";
import { AuthProvider } from "./components/Login/AuthProvider";
import PrivateRoute from "./components/Login/PrivateRoute";
const App = (props) => {
  debugger;
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Sidebar />
        <div className="app-wrapper-content">
          <AuthProvider>
            <Routes>
              <Route
                path="/profile/:userId"
                element={
                  <PrivateRoute>
                    <ProfileContainer />
                  </PrivateRoute>
                }
              />
              <Route
                path="/profile/"
                element={
                  <PrivateRoute>
                    <ProfileContainer />
                  </PrivateRoute>
                }
              />

              <Route
                path="/dialogs/*"
                element={
                  <PrivateRoute>
                    <DialogContainer />
                  </PrivateRoute>
                }
              />
              <Route path="/users" element={<Users />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </AuthProvider>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
