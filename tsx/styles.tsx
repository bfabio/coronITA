import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',

    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  card: {
    maxWidth: "35em",
    marginBottom: "0.5em",
    marginLeft:"auto",
    marginRight:"auto"
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  title: {

    marginBottom: "0.5em"
  },
  anchor: {
    position: "relative",
    left: "0px",
    top: "-5em",
    width: "1px",
    height: "1px"
  },
  pageTitle: {
    flexGrow: 1,
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  containerMobile: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(0),
    paddingRight: theme.spacing(0)
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  paperMobile: {
    padding: theme.spacing(0),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  gridItem: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto"
  },
  gridItemMobile: {
    width: "100%",
    paddingLeft: theme.spacing(0.5),
    paddingRight: theme.spacing(0.5),
    
  },
  right: {
    margintLeft: "auto"
  }
}));