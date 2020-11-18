import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Container,
} from "@material-ui/core/";
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from "./styles";

const MenuBar: React.FC = React.memo(() => {
  const classes = useStyles();
  return (
    <AppBar position="static" color="transparent">
      <Container maxWidth="lg">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            ZInation
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
});
export default MenuBar;
