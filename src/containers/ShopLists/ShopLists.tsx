import React from "react";
import {
  Container,
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Grid,
  Button,
  Paper,
} from "@material-ui/core/";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { ShopListItems } from "./../../components";
import Pagination from "@material-ui/lab/Pagination";

import useStyles from "./styles";

const ShopLists: React.FC = React.memo(() => {
  const classes = useStyles();
  const top100Films = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
  ];
  return (
    <Container maxWidth="lg">
      <Box py={2}>
        <Typography variant="h6" className={classes.title}>
          Shops
        </Typography>
      </Box>
      <Accordion
        classes={{
          root: classes.accordion,
          expanded: classes.accordionExtends,
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          classes={{ content: classes.filterHeader }}
        >
          <Typography>Filter</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <Autocomplete
                id="country"
                options={top100Films}
                getOptionLabel={(option: any) => option.title}
                size={"small"}
                renderInput={(params: any) => (
                  <TextField
                    {...params}
                    label=""
                    placeholder="Select Country"
                    variant="outlined"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Autocomplete
                id="state"
                options={top100Films}
                getOptionLabel={(option: any) => option.title}
                size={"small"}
                renderInput={(params: any) => (
                  <TextField
                    {...params}
                    label=""
                    placeholder="Select State"
                    variant="outlined"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Autocomplete
                id="city"
                options={top100Films}
                getOptionLabel={(option: any) => option.title}
                size={"small"}
                renderInput={(params: any) => (
                  <TextField
                    {...params}
                    label=""
                    placeholder="Select City"
                    variant="outlined"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                id="storename"
                label=""
                placeholder="Store Name"
                variant="outlined"
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item xs={12} className={classes.fillterWrapper}>
              <Button variant="contained">Filter</Button>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Grid spacing={3} container className={classes.stoteListWrapper}>
        <Grid item xs={12} sm={6}>
          <Paper
            elevation={0}
            variant="outlined"
            className={classes.listWrapper}
          >
            <ShopListItems items={null} />
            <Box className={classes.paginationWrapper}>
              <Pagination
                size="small"
                count={10}
                shape="rounded"
                color="primary"
                className={classes.pagination}
              />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
});
export default ShopLists;
