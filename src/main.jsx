import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import ErrorPage from "./pages/ErrorPage";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Campaign from "./components/Campaign";
import HowToHelp from "./pages/HowToHelp";
import Donation from "./pages/Donation";
import { ToastContainer } from "react-toastify";
import PrivateRoute from "./protected/PrivateRoute";
import Volunteer from "./pages/Volunteer";
import AuthProvider from "./provider/AuthProvider";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { ParallaxProvider } from "react-scroll-parallax";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },

      {
        path: "/campaigns/:id",
        loader: () => fetch("/data/campaignData.json"),
        element: <Campaign></Campaign>,
      },
      {
        path: "/how-to-help",
        element: <HowToHelp></HowToHelp>,
      },
      {
        path: "/donation",
        element: (
          <PrivateRoute>
            <Donation></Donation>
          </PrivateRoute>
        ),
      },
      {
        path: "/become-a-volunteer-today",
        element: (
          <PrivateRoute>
            <Volunteer></Volunteer>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ParallaxProvider>
        <RouterProvider router={router} />
        <ToastContainer></ToastContainer>
      </ParallaxProvider>
    </AuthProvider>
  </StrictMode>
);