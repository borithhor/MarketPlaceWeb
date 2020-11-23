import {makeStyles} from '@material-ui/core/styles';
const useStyles = makeStyles((theme: any) => ({
	title:{
		fontWeight: 500,
	},
	photoThumbnail:{
		width: 40,
		height: 60,
		backgroundColor: 'gray',	
	},
	cellPhoto:{
		width: 40,
	},
	cellDate: {
		width: 60,
	},
	cellView:{
		width:60,
	},
	contactWrapper:{
		padding: 20,
	},
	listWrapper:{
		paddingRight: 20,
		paddingLeft: 20,
	},
}));
export default useStyles;
