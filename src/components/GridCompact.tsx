import {Grid, withStyles} from "@material-ui/core";

export default withStyles({
    container: {
        marginTop: 0,
        marginBottom: 0,
        verticalAlign: "center"
    },
    item: {
        paddingTop: "0 !important",
        paddingBottom: "0 !important"
    }
})(Grid)
