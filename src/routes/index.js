import { Route, Switch } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import { Suspense } from "react";
import LoadingState from "../components/Loading";

const Routes = (
  <Suspense fallback={<LoadingState />}>
    <Switch>
      {PublicRoutes.map((route) => (
        <Route {...route} key={route.name} />
      ))}
    </Switch>
  </Suspense>
);

export default Routes;
