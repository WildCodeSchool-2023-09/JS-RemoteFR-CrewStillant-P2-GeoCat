import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import "./style.css";
import "leaflet/dist/leaflet.css";
import { RemainingProvider } from "./contexts/RemainingTriesContext";
import Navbar from "./components/navbar/Navbar";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <RemainingProvider>
        <div className="container">
          <Navbar />
          <Outlet />
        </div>
      </RemainingProvider>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}
export default App;
