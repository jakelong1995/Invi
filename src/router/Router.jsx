import React, {lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const HomeComponent = lazy(() => import("../pages/home/AppContainer"));
const EventComponent = lazy(() => import("../pages/event/create/AppContainer"));
const EventManagementComponent = lazy(() => import("../pages/event/management/AppContainer"));

import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <HomeComponent />
      </Suspense>
    ),
    errorElement: <ErrorPage />
  },
  {
    path: "/home",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <HomeComponent />
      </Suspense>
    ),
    errorElement: <ErrorPage />
  },
  {
    path: "/createEvent",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <EventComponent />
      </Suspense>
    ),
    errorElement: <ErrorPage />
  },
  {
    path: "/eventManagement",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <EventManagementComponent />
      </Suspense>
    ),
    errorElement: <ErrorPage />
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}