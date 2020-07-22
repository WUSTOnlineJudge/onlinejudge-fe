import React from "react";
import DrawerNav from "../components/Drawer";
import {createStyles, Theme, withStyles} from "@material-ui/core";
import {drawerWidth} from "../components/Drawer";
import { Router, Route, Switch } from 'dva/router';
import Problems from "./Problems";
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import pink from "@material-ui/core/colors/pink";
import ProblemDetail from "./ProblemDetail";


const useStyles = (theme: Theme) => createStyles({
    main: {
        flexGrow: 1,
        padding: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            marginLeft: drawerWidth
        }
    },
    toolbar: theme.mixins.toolbar,
})



class Home extends React.Component<any, any> {
    render() {
        const {classes} = this.props
        const theme = createMuiTheme({
            palette: {
                primary: blue,
                secondary: pink,
            },
        });
        return (
            <div>
               <ThemeProvider theme={theme}>
                   <DrawerNav/>
                   <main className={classes.main}>
                       <div className={classes.toolbar} />
                       <Switch>
                           <Route path="/problem" component={Problems}>
                               <Route path="/problem/:problemId" component={ProblemDetail}/>
                           </Route>
                       </Switch>
                   </main>
               </ThemeProvider>
            </div>
        );
    }
}

export default withStyles(useStyles)(Home)
