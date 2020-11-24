import {makeStyles} from '@material-ui/core/styles';
const useStyles = makeStyles((theme: any) => ({
  footerWrapper:{
    display: 'flex',
    backgroundColor: '#212121',
    color: 'white',
    marginTop: 20,
    paddingBottom: 20,
    paddingTop: 20,
  },
  logoWrapper:{
    margin: 'auto',
  },
  footerLogo:{
    cursor: 'pointer',
  },
  socialWrapper:{
    display: 'flex',
  },
  avata:{
    marginRight: 10,
  },
  listIcon:{
    color: 'white',
    minWidth: 40,
  },
  listItem:{
    padding: 0,
  },
  learnMoreContent:{
    padding: 0,
    paddingTop: 7,
  }
}));
export default useStyles;
