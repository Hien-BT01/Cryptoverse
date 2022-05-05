import { lazy } from "react";

const PublicRoutes = [
  {
    name: "Home page",
    exact: true,
    component: lazy(() => import("../pages/Home")),
    path: "/",
  },
  {
    name: "Currencies page",
    exact: true,
    component: lazy(() => import("../pages/CryptoCurrencies")),
    path: "/crypto-currencies",
  },
  {
    name: "News pages",
    exact: true,
    component: lazy(() => import("../pages/News")),
    path: "/news",
  },
  {
    name: "Details page",
    exact: true,
    component: lazy(() => import("../pages/CryptoDetails")),
    path: "/crypto/:coinId",
  },
  {
    name: "404 page",
    component: lazy(() => import("../pages/NotFound")),
    path: "*",
  },
];

export default PublicRoutes;
