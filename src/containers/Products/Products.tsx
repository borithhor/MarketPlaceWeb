import React from "react";
import { Container } from "@material-ui/core/";

import useStyles from "./styles";

const Products: React.FC = React.memo(() => {
  const classes = useStyles();
  return <Container maxWidth="lg">Products</Container>;
});
export default Products;
