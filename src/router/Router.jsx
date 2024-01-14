import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const HomeComponent = lazy(() => import("../pages/home/Home"));
const Landing = lazy(() => import("../pages/landing/LandingPage"));
const EventComponent = lazy(() => import("../pages/event/create/CreateEvent"));
const EventManagementComponent = lazy(() =>
  import("../pages/event/management/EventManagement.jsx")
);
const UserPage = lazy(() => import("../pages/userpage/UserPage"));
const LoginComponent = lazy(() => import("../pages/login/Login.jsx"));
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
  {
    path: "/Invi",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Landing />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/Invi/home",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <HomeComponent />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/Invi/create-event",
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
    path: "/Invi/login",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <LoginComponent />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
