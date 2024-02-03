import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Footer from "./Pages/Footer.jsx";
import TheNavbar from "./components/TheNavbar.jsx";
import ProfilePage from "./Pages/ProfilePage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="bg-gray-">
    {/* <App /> */}
    <TheNavbar />

    <ProfilePage />

    <Footer />
  </div>
);
