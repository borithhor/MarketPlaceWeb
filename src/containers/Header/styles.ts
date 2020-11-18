import {makeStyles} from '@material-ui/core/styles';
const useStyles = makeStyles((theme: any) => ({

  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
}));
export default useStyles;
