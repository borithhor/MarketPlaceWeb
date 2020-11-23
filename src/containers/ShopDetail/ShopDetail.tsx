import React from "react";
import {
  Container,
  Typography,
  Box,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core/";
import WebIcon from "@material-ui/icons/Web";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";

import useStyles from "./styles";

interface Data {
  name: string;
  code: string;
  population: number;
  size: number;
  density: number;
}
const createData = (
  name: string,
  code: string,
  population: number,
  size: number
): Data => {
  const density = population / size;
  return { name, code, population, size, density };
};
const rows = [
  createData("Zine Title", "1", 1324171354, 3287263),
  createData("Zine Title", "2", 1403500365, 9596961),
  createData("Zine Title", "3", 60483973, 301340),
  createData("Zine Title", "4", 327167434, 9833520),
  createData("Zine Title", "5", 37602103, 9984670),
  createData("Zine Title", "6", 25475400, 7692024),
  createData("Zine Title", "7", 83019200, 357578),
  createData("Zine Title", "8", 4857000, 70273),
  createData("Zine Title", "9", 126577691, 1972550),
  createData("Zine Title", "10", 126317000, 377973),
  createData("Zine Title", "11", 67022000, 640679),
  createData("Zine Title", "12", 67545757, 242495),
  createData("Zine Title", "13", 146793744, 17098246),
  createData("Zine Title", "14", 200962417, 923768),
  createData("Zine Title", "15", 210147125, 8515767),
];

const ShopDetail: React.FC = React.memo(() => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <Container maxWidth="lg">
      <Box py={2}>
        <Typography variant="h6" className={classes.title}>
          Store Name
        </Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper>
            <TableContainer>
              <Table stickyHeader aria-label="sticky table" size="small">
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.cellPhoto}>Photo</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell className={classes.cellDate}>Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.code}
                        >
                          <TableCell className={classes.cellPhoto}>
                            <Box className={classes.photoThumbnail} />
                          </TableCell>
                          <TableCell>{row.name}</TableCell>
                          <TableCell className={classes.cellDate}>
                            22/12/2020
                          </TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.contactWrapper}>
            <Box>
              <Typography variant="button">Contact Us</Typography>
            </Box>
            <List className={classes.listWrapper}>
              <ListItem button component="a" href="/">
                <ListItemIcon>
                  <WebIcon />
                </ListItemIcon>
                <ListItemText primary="Website" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <PhoneInTalkIcon />
                </ListItemIcon>
                <ListItemText primary="(418) 670-9794" />
              </ListItem>
            </List>
            <Box px={5}>
              <Typography variant="button">Shop Name</Typography>
              <Box py={2}>
                <Typography variant="body2">
                  1702 Notre-Dame Street L'ancienne-lorette, QC G2E3B8
                </Typography>
                <Typography variant="body2">Ottawa,Canada</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
});
export default ShopDetail;
