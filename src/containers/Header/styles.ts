import {makeStyles} from '@material-ui/core/styles';
const useStyles = makeStyles((theme: any) => ({
  container:{
    paddingLeft: 0,
    paddingRight: 0
  },
  logoWrapper:{
    margin: "auto",
  },
  drawerLogo:{
    display: "block",
    margin: "auto",
    padding: 10,
    cursor: 'pointer',
  },
  logo:{
    height: 33,
    cursor: 'pointer',
  },
  listItem:{
    paddingLeft: 25,
    paddingRight: 25,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
}));
export default useStyles;
