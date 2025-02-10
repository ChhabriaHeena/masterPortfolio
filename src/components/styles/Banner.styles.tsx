import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@mui/material';

const useStyles = makeStyles(() => ({

    banner: {
        margin: "0",
        padding: "0"
    },
    bannerMain: {
        // height: "100vh",
    },
    bannerGridContainer: {
        // height: "100vh"

    },

    bannerGridItemContent: {
        // marginLeft: "10%"

    },
    bannerContent: {
        marginLeft: "7%",
        marginTop: "10%",
        color: "rgb(30,47,76)"
    },
    bannerImage: {
        width: "100%",
        height: "80vh"
    }
}));

export default useStyles;
