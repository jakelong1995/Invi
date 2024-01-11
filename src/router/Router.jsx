import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const HomeComponent = lazy(() => import("../pages/home/Home"));
const Landing = lazy(() => import("../pages/landing/LandingPage"));
const EventComponent = lazy(() => import("../pages/event/create/CreateEvent"));

import ErrorPage from "./ErrorPage";
const UserPage = lazy(() => import("../pages/userpage/UserPage"));

const router = createBrowserRouter([
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
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
