import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Container,
  List,
  ListItem,
  Divider,
  ListItemText,
  Drawer,
} from "@material-ui/core/";
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from "./styles";
import clsx from "clsx";
import Logo from "./../../images/logo/logo.png";
import { useHistory } from "react-router-dom";

type Anchor = "left";
const Menu = ["Shops", "Products"];

const Header: React.FC = React.memo(() => {
  const classes = useStyles();
  let history = useHistory();
  const [state, setState] = React.useState({
    left: false,
  });
  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const handleLogoClick = () => {
    history.push("/");
  };
  const handleSelect = (text: string) => {
    if (text === "Shops") {
      history.push("/shops");
    }
    if (text === "Products") {
      history.push("/products");
    }
  };
  const list = (anchor: Anchor) => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className={classes.logoWrapper}>
        <img
          src={Logo}
          alt="Logo"
          className={classes.drawerLogo}
          onClick={() => handleLogoClick()}
        />
      </div>
      <List>
        {Menu.map((text, index) => (
          <React.Fragment key={index}>
            <Divider />
            <ListItem
              button
              className={classes.listItem}
              onClick={() => handleSelect(text)}
            >
              <ListItemText primary={text} />
            </ListItem>
          </React.Fragment>
        ))}
      </List>
    </div>
  );
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Container className={classes.container} maxWidth="lg">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer("left", true)}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.logoWrapper}>
            <img
              src={Logo}
              alt="Logo"
              className={classes.logo}
              onClick={() => handleLogoClick()}
            />
          </div>
        </Toolbar>
      </Container>
      <Drawer
        anchor={"left"}
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
      </Drawer>
    </AppBar>
  );
});
export default Header;
