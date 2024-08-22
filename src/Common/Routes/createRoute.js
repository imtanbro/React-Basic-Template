import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import LandingPage from "../../Pages/LandingPage";
import AboutUs from "../../Pages/AboutUs";
import ContactUs from "../../Pages/ContactUs";
import { ABOUT_PAGE, CONTACT_US, HOME_PAGE } from "../Constants/routePaths";
import ErrorPage from "../Components/ErrorPage";

export const appRoute = createBrowserRouter([
  {
    path: HOME_PAGE,
    element: <App />,
    children: [
      { path: HOME_PAGE, element: <LandingPage /> },
      { path: ABOUT_PAGE, element: <AboutUs /> },
      { path: CONTACT_US, element: <ContactUs /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);
