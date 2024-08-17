import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@mui/material';

const useStyles = makeStyles(() => ({
  headerMain: {
    display: 'flex',
  },
  iconButton: {
    marginRight: 2,
    [useTheme().breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

export default useStyles;
