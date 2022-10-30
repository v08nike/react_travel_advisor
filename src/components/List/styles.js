import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1), minWidth: 120, marginBottom: '30px',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  loading: {
    height: '650px', display: 'flex', justifyContent: 'center', alignItems: 'center',
  },
  container: {
    padding: '27px',
  },
  marginBottom: {
    marginBottom: '32px',
  },
  list: {
    height: '75vh', overflow: 'auto',
  },
}));
