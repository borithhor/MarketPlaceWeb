import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthenticatedRoute, NotFound, LoaderRotate } from "../components";
import Desk from "./Desk";

interface Props {
  childProps: any;
}
const Routes = (props: Props) => {
  const { childProps } = props;

  return (
    <React.Suspense fallback={<LoaderRotate />}>
      <Switch>
        <AuthenticatedRoute path="/" props={childProps} component={Desk} />
        <Route component={NotFound} />
      </Switch>
    </React.Suspense>
  );
};

export default Routes;
