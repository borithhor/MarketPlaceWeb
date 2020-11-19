import React from "react";
import { Route, Switch } from "react-router-dom";
import { PermissionRoute, NotFound, LoaderRotate } from "../../components";

const Home = React.lazy(() => import("./../Home"));
const ShopLists = React.lazy(() => import("./../ShopLists"));
const Products = React.lazy(() => import("./../Products"));
interface Props {
  childProps: any;
}
const Routes = (props: Props) => {
  const { childProps } = props;
  return (
    <React.Suspense fallback={<LoaderRotate />}>
      <Switch>
        <PermissionRoute exact path="/" props={childProps} component={Home} />
        <PermissionRoute
          exact
          path="/shops"
          props={childProps}
          component={ShopLists}
        />
        <PermissionRoute
          exact
          path="/products"
          props={childProps}
          component={Products}
        />
        <Route component={NotFound} />
      </Switch>
    </React.Suspense>
  );
};

export default Routes;
