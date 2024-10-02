import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@mui/material';

const useStyles = makeStyles(() => ({

    hire: {
        margin: "0",
        padding: "0"
    },
    hireMain: {
        // height: "100vh",
        marginTop: "5%",
        backgroundColor:"#A5ACFE"
    },
    bannerGridContainer: {
        // height: "100vh"

    },

    bannerGridItemContent: {
        // marginLeft: "10%"

    },
    bannerContent: {
        marginLeft: "7%",
        marginTop: "17%",
        color: "rgb(30,47,76)"
    },
    bannerImage: {
        width: "100%",
        height: "90vh"
    }
}));

export default useStyles;
