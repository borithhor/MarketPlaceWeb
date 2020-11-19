import React from "react";
import { Container, Grid } from "@material-ui/core/";

import useStyles from "./styles";

const ShopLists: React.FC = React.memo(() => {
  const classes = useStyles();
  return <Container maxWidth="lg">Shops</Container>;
});
export default ShopLists;
