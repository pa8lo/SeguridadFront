import pink from '@material-ui/core/colors/pink';
import green from '@material-ui/core/colors/green';
import blue from '@material-ui/core/colors/blue';

const StylesLoginForm = theme => ({
    layout: {
      width: 'auto',
      display: 'block', // Fix IE 11 issue.
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
        width: 550,
        marginLeft: 'auto',
        marginRight: 150,
      },
    },
    layoutPassword: {
      width: '100%',
 
    },
    paper: {
      marginTop: theme.spacing.unit * 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
      margin: theme.spacing.unit,
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing.unit,
    },
    submit: {
      marginTop: theme.spacing.unit * 3,
    },
    buttonProgress:{
      color: pink[500],
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: -12,
      marginLeft: -12,
    },
    buttonSucess:{
      background : green[500]
    },
    buttonNormal:{
      background : blue[500]
    }
});

export default StylesLoginForm;