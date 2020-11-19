import React from "react";
import { Container, Grid } from "@material-ui/core/";
import { SearchBox, CardBox } from "./../../components";

const Home: React.FC = React.memo(() => {
  return (
    <Container maxWidth="lg">
      <SearchBox />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <CardBox index={0} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CardBox index={1} />
        </Grid>
      </Grid>
    </Container>
  );
});
export default Home;
