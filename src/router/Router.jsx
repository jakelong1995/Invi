import React, {lazy } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const HomeComponent = lazy(() => import("../pages/home/AppContainer"));
const EventComponent = lazy(() => import("../pages/event/create/AppContainer"));
const EventManagementComponent = lazy(() => import("../pages/event/management/AppContainer"));

import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeComponent />,
    errorElement: <ErrorPage />
  },
  {
    path: "/home",
    element: <HomeComponent />,
    errorElement: <ErrorPage />
  },
  {
    path: "/createEvent",
    element: <EventComponent />,
    errorElement: <ErrorPage />
  },
  {
    path: "/eventManagement",
    element: <EventManagementComponent />,
    errorElement: <ErrorPage />
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
