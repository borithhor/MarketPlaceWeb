import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
} from "@material-ui/core/";
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from "./styles";
import clsx from "clsx";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

type Anchor = "left";

const Header: React.FC = React.memo(() => {
  const classes = useStyles();
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
  const list = (anchor: Anchor) => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <AppBar position="static" color="transparent">
      <Container maxWidth="lg">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer("left", true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            ZInation
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
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
