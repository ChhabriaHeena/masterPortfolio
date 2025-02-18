import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
    loaderOverlay: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backGround: "rgba(255, 255, 255, 0.7)", /* White overlay with opacity */
        backdropFilter: "blur(5px)", /* Blur effect */
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000
    },
    loaderImage: {
        width: "80px", /* Adjust size */
        height: "80px"
    }
}));

export default useStyles;