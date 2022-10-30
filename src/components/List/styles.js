import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2), minWidth: 140, marginBottom: '30px',
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
    height: '80vh', overflow: 'auto',
  },
}));
