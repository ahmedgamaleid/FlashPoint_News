import "./App.css";
import React, { useState, useEffect } from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import loadingVideo from "./videos/Gennify.mp4";
import Layout from "./component/Layout";

import ReactLoading from "react-loading";
import { jwtDecode } from "jwt-decode";
import Home from "./component/Home";
import Errormsg from "./component/Errormsg";
import About from "./component/About";
import TrendingAndCategProvider from "./CONTEXT/trendingandcateg"; // Adjust path if necessary
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Footer from "./component/Footer";
import Contact from './component/Contact';
import NEWS from "./component/NEWS";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  const routes = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },

        { path: "home", element: <Home  /> }, // Use lowercase
        { path: "*", element: <Errormsg /> },
        { path: "About", element: <About /> },
        { path: "NEWS", element: <NEWS /> },
        { path: "Contact", element: <Contact /> },
     
       
      ],
    },
  ]);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400); // Change the time to simulate loading time
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <TrendingAndCategProvider>
          <RouterProvider router={routes} />
        </TrendingAndCategProvider>
      )}
    </>
  );
}

function Loading() {
  return (
    <div className="loading-container text-center d-flex justify-content-center align-items-center vh-100 ">
      <div className="d-flex flex-column justify-content-center align-items-center vh-100">
        <video className="loading-video h-100 w-100" autoPlay loop muted>
          <source src={loadingVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
export default App;
