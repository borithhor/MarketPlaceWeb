import {makeStyles} from '@material-ui/core/styles';
const useStyles = makeStyles((theme: any) => ({
	title:{
	fontWeight: 500,
	},
	accordion:{
		border: '1px solid rgba(0, 0, 0, .125)',
		borderRadius: 10,
		boxShadow: 'none',
		'&:before':{
			backgroundColor: 'unset',
		}
	},
	accordionExtends:{
	margin: 0,	
	},
	filterHeader:{
		textAlign: 'right',
		display: 'block',
	},
	fillterWrapper:{
		display: 'flex',
		justifyContent: 'flex-end',
		marginTop: 5,
		marginBottom: 5,
	},
	stoteListWrapper:{
		marginTop: 20,
	},
	listWrapper:{
		maxHeight: 400,
		overflow: 'auto',
	},
	paginationWrapper:{
		paddingTop: 15,
		paddingBottom: 15,
	},
	pagination: {
		display: 'flex',
		justifyContent:'center',
	}
}));
export default useStyles;
