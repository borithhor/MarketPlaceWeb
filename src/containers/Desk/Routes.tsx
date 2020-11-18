import React from "react";
import { Route, Switch } from "react-router-dom";
import { PermissionRoute, NotFound, LoaderRotate } from "../../components";

const Home = React.lazy(() => import("./../Home"));
interface Props {
  childProps: any;
}
const Routes = (props: Props) => {
  const { childProps } = props;
  return (
    <React.Suspense fallback={<LoaderRotate />}>
      <Switch>
        <PermissionRoute exact path="/" props={childProps} component={Home} />
        <Route component={NotFound} />
      </Switch>
    </React.Suspense>
  );
};

export default Routes;
