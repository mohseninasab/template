import { lazy } from "react";

// #############################################################################
// list of routes
// #############################################################################

export default [
  {
    layout: lazy(() => import("pages/admin-dashboard/admin-dashboard")),
    path: '/admin-dashboard',
    label: 'Admin Dashboard',
    title: 'Admin Dashboard',
    name: "adminDashboard",
    exact: false,
    children: [
      {
        layout: lazy(()=> import("components/error-pages/error-page")),
        path: '/',
        label: 'Error Page',
        title: 'Error Page',
        exact: false,
      }      
    ]
  },
  {
    layout: lazy(() => import("pages/user-dashboard/user-dashboard")),
    path:  '/user-dashboard',
    label: 'User Dashboard',
    title: 'User Dashboard',
    name:  'userDashboard',
    exact: false,
    children: [
      {
        layout: lazy(()=> import("components/error-pages/error-page")),
        path: '/',
        label: 'Error Page',
        title: 'Error Page',
        exact: false,
      }
    ]
  },
  {
    layout: lazy(() => import("pages/login-page")),
    path: '/',
    label: 'Login Page',
    title: 'Login Page',
    exact: true,
  },
  {
    layout: lazy(() => import("pages/register-page")),
    path: '/register',
    label: 'Register Page',
    title: 'Register Page',
    exact: true,
  },
  {
    layout: lazy(() => import("pages/login-page")),
    path: '/login',
    label: 'Login Page',
    title: 'Login Page',
    exact: true,
  },
  {
    layout: lazy(() => import("pages/login-page")),
    path: '/log-in',
    label: 'Login Page',
    title: 'Login Page',
    exact: true,
  },
  {
    layout: lazy(()=> import("components/error-pages/error-page")),
    path: '/',
    label: 'Error Page',
    title: 'Error Page',
    exact: false,
  }
];
