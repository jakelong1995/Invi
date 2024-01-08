import React, { lazy, Suspense } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

const HomeComponent = lazy(() => import("../pages/home/Home"));
const Landing = lazy(() => import("../pages/landing/LandingPage"));
const EventComponent = lazy(() => import("../pages/event/create/CreateEvent"));
const EventManagementComponent = lazy(() =>
  import("../pages/event/management/EventManagement")
);
const Login = lazy(() => import("../pages/login/Login"));

import ErrorPage from "./ErrorPage";
import UserPage from "../pages/userpage/UserPage";

const routes = [
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Landing />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <HomeComponent />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/create-event",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <EventComponent />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/eventManagement",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <EventManagementComponent />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/user-page",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <UserPage />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/sign-in",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Login />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
];

const Router = () => (
  <HashRouter>
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  </HashRouter>
);

export default Router;
