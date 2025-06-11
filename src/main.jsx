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
import "aos/dist/aos.css";
import "animate.css";
import { useAOS } from "./hooks/useAOS";

// Top-level AOS initializer wrapper
function RootApp() {
  useAOS();

  return (
    <AuthProvider>
      <ParallaxProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </ParallaxProvider>
    </AuthProvider>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about-us", element: <AboutUs /> },
      {
        path: "/campaigns/:id",
        loader: () => fetch("/data/campaignData.json"),
        element: <Campaign />,
      },
      { path: "/how-to-help", element: <HowToHelp /> },
      {
        path: "/donation",
        element: (
          <PrivateRoute>
            <Donation />
          </PrivateRoute>
        ),
      },
      {
        path: "/become-a-volunteer-today",
        element: (
          <PrivateRoute>
            <Volunteer />
          </PrivateRoute>
        ),
      },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RootApp />
  </StrictMode>
);