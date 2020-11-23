import React from "react";
import {
  Container,
  Typography,
  Box,
  CircularProgress,
} from "@material-ui/core";
import useStyles from "./styles";
export const LoaderRotate = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="sm" className={classes.loaderRotate}>
      <Box py={10}>
        <CircularProgress className={classes.loader} />
        <Typography>Loading...</Typography>
      </Box>
    </Container>
  );
};
