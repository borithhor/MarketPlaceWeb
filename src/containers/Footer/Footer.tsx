import React from "react";
import {
  Container,
  Grid,
  Paper,
  Box,
  Avatar,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link,
} from "@material-ui/core/";
import { useHistory } from "react-router-dom";
import useStyles from "./styles";
import Logo from "./../../images/logo/logo.png";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import PinterestIcon from "@material-ui/icons/Pinterest";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import HomeIcon from "@material-ui/icons/Home";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import { withStyles, Theme, createStyles } from "@material-ui/core/styles";
// import { useHistory } from "react-router-dom";

const StyledAvata = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "&:hover": {
        backgroundColor: "#989696",
      },
      marginRight: 10,
    },
  })
)(Avatar);

const Footer: React.FC = React.memo(() => {
  const classes = useStyles();
  let history = useHistory();
  const handleLogoClick = () => {
    history.push("/");
  };
  // let history = useHistory();

  return (
    <Paper elevation={0} square className={classes.footerWrapper}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4} className={classes.logoWrapper}>
            <Box py={3}>
              <img
                src={Logo}
                alt="Logo"
                className={classes.footerLogo}
                onClick={() => handleLogoClick()}
                // className={classes.logo}
              />
            </Box>
            <Box className={classes.socialWrapper}>
              <StyledAvata>
                <IconButton
                  href="https://www.facebook.com/zinationfans"
                  target="_blank"
                >
                  <FacebookIcon />
                </IconButton>
              </StyledAvata>
              <StyledAvata>
                <IconButton
                  href="https://twitter.com/zination_com"
                  target="_blank"
                >
                  <TwitterIcon />
                </IconButton>
              </StyledAvata>
              <StyledAvata>
                <IconButton
                  href="https://www.pinterest.com/zination/"
                  target="_blank"
                >
                  <PinterestIcon />
                </IconButton>
              </StyledAvata>
              <StyledAvata>
                <IconButton
                  href="https://www.linkedin.com/company/zination"
                  target="_blank"
                >
                  <LinkedInIcon />
                </IconButton>
              </StyledAvata>
              <StyledAvata>
                <IconButton
                  href="https://www.instagram.com/zination_com/"
                  target="_blank"
                >
                  <InstagramIcon />
                </IconButton>
              </StyledAvata>
              <StyledAvata>
                <IconButton
                  href="https://www.youtube.com/channel/UCdMF1y1XxGxMqSyr342SGhg?sub_confirmation=1."
                  target="_blank"
                >
                  <YouTubeIcon />
                </IconButton>
              </StyledAvata>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box py={2}>
              <Typography variant="button">Learn More</Typography>
            </Box>
            <List component="nav" aria-label="contact us">
              <ListItem className={classes.learnMoreContent}>
                <Link
                  href="https://about.zination.com/catalog-faq/"
                  target="_blank"
                  color="inherit"
                  variant="body1"
                >
                  Catalog FAQ
                </Link>
              </ListItem>
              <ListItem className={classes.learnMoreContent}>
                <Link
                  href="https://about.zination.com/shopify-apps/"
                  target="_blank"
                  color="inherit"
                  variant="body1"
                >
                  Shopify Apps
                </Link>
              </ListItem>
              <ListItem className={classes.learnMoreContent}>
                <Link
                  href="https://about.zination.com/category/ecommerce-magazine/"
                  target="_blank"
                  color="inherit"
                  variant="body1"
                >
                  Ecommerce-magazine
                </Link>
              </ListItem>
              <ListItem className={classes.learnMoreContent}>
                <Link
                  href="https://blog.zination.com/category/video-tutorial-about-zination-catalog-maker/"
                  target="_blank"
                  color="inherit"
                  variant="body1"
                >
                  Training Video
                </Link>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box py={2}>
              <Typography variant="button">Contact us</Typography>
            </Box>
            <List component="nav" aria-label="contact us">
              <ListItem className={classes.listItem}>
                <ListItemIcon className={classes.listIcon}>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Ottawa, Ontario, Canada" />
              </ListItem>
              <ListItem className={classes.listItem}>
                <ListItemIcon className={classes.listIcon}>
                  <PhoneIcon />
                </ListItemIcon>
                <ListItemText primary="Phone: 1.855.947.0202" />
              </ListItem>
              <ListItem className={classes.listItem}>
                <ListItemIcon className={classes.listIcon}>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary="Email: info@zination.com" />
              </ListItem>
              <ListItem className={classes.listItem}>
                <ListItemIcon className={classes.listIcon}>
                  <QueryBuilderIcon />
                </ListItemIcon>
                <ListItemText primary="Hours of operation: 9 am - 5 pm (EST)" />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
});
export default Footer;
