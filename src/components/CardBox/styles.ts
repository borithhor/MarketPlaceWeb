import {makeStyles} from '@material-ui/core/styles';
const useStyles = makeStyles((theme: any) => ({
  cardWrapper:{
    margin: 'auto',
    maxWidth: 500,
    height: 'auto',
    position: 'relative',
    borderRadius: 10,
    cursor: 'pointer',
  },
  CardImg:{
    width: '100%',
    opacity: 0.9,
    borderRadius: 10,
  },
  boxContent:{
    position: 'absolute',
    zIndex: 2,
    bottom: 0,
    top: '10%',
    width: '90%',
  },
  cardTitle:{
    color: 'white',
    fontWeight: 500,
    '&:hover':{
      color: '#24B1ED',
    }
  },
  cardSubtitle:{
    color: 'white',
  }
}));
export default useStyles;
