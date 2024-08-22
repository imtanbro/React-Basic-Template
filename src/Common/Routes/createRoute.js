import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import { ABOUT_PAGE, CONTACT_US, HOME_PAGE } from "../Constants/routePaths";

import { lazy, Suspense } from "react";
import SectionHeading from "../Components/SectionHeading";
const LandingPage = lazy(() => import("../../Pages/LandingPage"));
const AboutUs = lazy(() => import("../../Pages/AboutUs"));
const ContactUs = lazy(() => import("../../Pages/ContactUs"));
const ErrorPage = lazy(() => import("../Components/ErrorPage"));

export const appRoute = createBrowserRouter([
  {
    path: HOME_PAGE,
    element: <App />,
    children: [
      {
        path: HOME_PAGE,
        element: <LandingPage />,
      },
      {
        path: ABOUT_PAGE,
        element: (
          <Suspense
            fallback={
              <div className="flex flex-col justify-center items-center">
                <SectionHeading heading={"Loading...."}></SectionHeading>
              </div>
            }
          >
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: CONTACT_US,
        element: (
          <Suspense
            fallback={
              <div className="flex flex-col justify-center items-center">
                <SectionHeading heading={"Loading...."}></SectionHeading>
              </div>
            }
          >
            <ContactUs />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense
            fallback={
              <div className="flex flex-col justify-center items-center">
                <SectionHeading heading={"Loading...."}></SectionHeading>
              </div>
            }
          >
            <ErrorPage />
          </Suspense>
        ),
      },
    ],
  },
]);
