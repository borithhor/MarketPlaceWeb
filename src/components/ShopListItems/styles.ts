import {makeStyles} from '@material-ui/core/styles';
const useStyles = makeStyles((theme: any) => ({
  container:{
    paddingBottom: 20,
    paddingTop: 20,
  },
  searchOptionWrapper:{
    display: 'flex',
    paddingTop: 10,
    paddingBottom: 10,
  },
  boxOption:{
    cursor: 'pointer',
  },
  optionTextActive:{
    color: '#24B1ED'
  },
  optionBorderActive:{
    color: '#24B1ED',
    cursor: 'pointer',
  },
  searchIcon:{
    color: '#DADADA'
  },
}));
export default useStyles;
