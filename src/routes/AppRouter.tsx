import { createBrowserRouter } from "react-router";
import { lazy } from "react";
import NotFound from "../pages/NotFound";

// Layout
const Layout = lazy(() => import("../components/layout/Layout"));

// Pages (lazy)
const Home = lazy(() => import("../pages/Home"));
const Systems = lazy(() => import("../pages/Systems_Solutions"));
const Features = lazy(() => import("../pages/Features"));
const Contact = lazy(() => import("../pages/ContactUs"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "systems", element: <Systems /> },
      { path: "features", element: <Features /> },
      { path: "contact-us", element: <Contact /> },

      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
