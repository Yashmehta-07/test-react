import { Outlet, RouteObject, createBrowserRouter } from "react-router-dom";
import {
  Admin,
  ArtisanProNetwork,
  CSinkNetwork,
  Dashboard,
  Farmer,
  Home,
  Production,
  Projects,
  TrainingContent,
} from "./dashboard";
import { ThemeWrapper, QueryClientWrapper } from "../lib";
import { AuthProvider } from "../contexts";
import { Login } from "./login";
import { ForgotPassword } from "./forgotPassword";

const GlobalProvider = () => {
  return (
    <ThemeWrapper>
      <QueryClientWrapper>
        <Outlet />
      </QueryClientWrapper>
    </ThemeWrapper>
  );
};

const AuthenticatedRoutes: RouteObject = {
  path: "/",
  Component: AuthProvider,
  children: [
    {
      path: "login",
      Component: Login,
    },
    {
      path: "forgot-password",
      Component: ForgotPassword,
    },
    {
      path: "/dashboard",
      Component: Dashboard,
      children: [
        {
          path: "home",
          Component: Home,
        },
        {
          path: "admin",
          element: <Outlet />,
          children: [
            { index: true, Component: Admin },
            { path: "training-content", Component: TrainingContent },
            { path: "projects", Component: Projects },
            { path: "queries", Component: Projects },
            { path: "biomass-details", Component: Projects },
            { path: "certificate-generation", Component: Projects },
          ],
        },
        {
          path: "production",
          element: <Outlet />,
          children: [
            { index: true, Component: Production },
            { path: "biomass-collections", Component: TrainingContent },
            { path: "batches", Component: Projects },
            { path: "application", Component: Projects },
            { path: "inventory", Component: Projects },
            { path: "c-sink-production", Component: Projects },
          ],
        },
        {
          path: "c-sink-network",
          element: <Outlet />,
          children: [
            { index: true, Component: CSinkNetwork },
            { path: "networks", Component: TrainingContent },
            { path: "credits", Component: Projects },
            { path: "certificates", Component: Projects },
          ],
        },
        {
          path: "artisan-pro-network",
          element: <Outlet />,
          Component: ArtisanProNetwork,
          children: [
            { index: true, Component: ArtisanProNetwork },
            { path: "network-list", Component: TrainingContent },
          ],
        },
        {
          path: "farmers",
          element: <Outlet />,
          children: [
            { index: true, Component: Farmer },
            { path: "crops", Component: TrainingContent },
            { path: "farms", Component: TrainingContent },
          ],
        },
      ],
    },
    {
      path: "/production",
      Component: Production,
    },
  ],
};

// const UnauthenticatedRoutes: RouteObject = {
//   path: "/",
//   Component: AuthProvider,
//   children: [
//     {
//       path: "/",
//       Component: Dashboard,
//     },
//     {
//       path: "/login",
//       Component: Login,
//     },
//   ],
// };

const DefaultRoute: RouteObject = {
  path: "/",
  Component: Login,
};

export const App = createBrowserRouter([
  {
    path: "/",
    Component: GlobalProvider,
    children: [DefaultRoute, AuthenticatedRoutes],
  },
]);
