import React, {lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const HomeComponent = lazy(() => import("../pages/home/Home"));
const Landing = lazy(() => import("../pages/landing/LandingPage"));
const EventComponent = lazy(() => import("../pages/event/create/CreateEvent"));
const EventManagementComponent = lazy(() =>
  import("../pages/event/management/AppContainer")
);

import ErrorPage from "./ErrorPage";
import LandingPage from '../pages/landing/LandingPage';
const LoginComponent = lazy(() =>
  import("../pages/authentication/Login")
);

import Layout from './Layout';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout >
        <Suspense fallback={<div>Loading...</div>}>
          <Landing />
        </Suspense>
      </Layout>
      
    ),
    errorElement: <ErrorPage />
  },
  {
    path: "/home",
    element: (
      <Layout >
        <Suspense fallback={<div>Loading...</div>}>
          <HomeComponent />
        </Suspense>
      </Layout>
      
    ),
    errorElement: <ErrorPage />
  },
  {
    path: "/create-event",
    element: (
      <Layout >
        <Suspense fallback={<div>Loading...</div>}>
          <EventComponent />
        </Suspense>
      </Layout>
    ),
    errorElement: <ErrorPage />
  },
  {
    path: "/event-management",
    element: (
      <Layout >
          <Suspense fallback={<div>Loading...</div>}>
          <EventManagementComponent />
        </Suspense>
      </Layout>
    ),
    errorElement: <ErrorPage />
  },
  {
    path: "/login",
    element: (
      <Layout >
        <Suspense fallback={<div>Loading...</div>}>
          <LoginComponent />
        </Suspense>
      </Layout>
    ),
    errorElement: <ErrorPage />
  },
  {
    path: "*",
    element: (
      <Layout >
        <Suspense fallback={<div>Loading...</div>}>
          <LandingPage />
        </Suspense>
      </Layout>
    ),
    errorElement: <ErrorPage />
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
