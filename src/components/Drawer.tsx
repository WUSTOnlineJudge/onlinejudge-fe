import React from "react";
import {
    AppBar,
    createStyles, CssBaseline,
    Divider,
    Drawer, Hidden, IconButton, LinearProgress,
    List,
    ListItem,
    ListItemIcon,
    ListItemText, ListSubheader,
    Theme, Toolbar, Typography,
    withStyles
} from "@material-ui/core";
import {Link} from "dva/router"

import MenuIcon from '@material-ui/icons/Menu';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import ListAltIcon from '@material-ui/icons/ListAlt';
import GavelIcon from '@material-ui/icons/Gavel';
import HelpIcon from '@material-ui/icons/Help';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import HomeIcon from '@material-ui/icons/Home';

export const drawerWidth = 200;

const useStyles = (theme: Theme) =>
        createStyles({
            root: {
                display: 'flex',
            },
            drawer: {
                [theme.breakpoints.up('sm')]: {
                    width: drawerWidth,
                    flexShrink: 0,
                },
            },
            menuButton: {
                marginRight: theme.spacing(2),
            },
            toolbar: theme.mixins.toolbar,
            drawerPaper: {
                marginTop: 64,
                width: drawerWidth,
            },
            content: {
                flexGrow: 1,
                padding: theme.spacing(3),
            },
        })

interface State {
    mobileOpen: boolean
}

class DrawerNav extends React.Component<any, State> {
    readonly state: Readonly<State> = {
        mobileOpen: false
    }

    handleDrawerToggle = () => {
        this.setState({mobileOpen: !this.state.mobileOpen})
    };

    render() {
        const {classes} = this.props;
        const drawer = (
            <div>
                <List
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                            Online Judge
                        </ListSubheader>
                    }>
                    <ListItem button>
                        <ListItemIcon><HomeIcon/></ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><LiveHelpIcon/></ListItemIcon>
                        <ListItemText primary="Problems" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><ListAltIcon/></ListItemIcon>
                        <ListItemText primary="Contests" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><GavelIcon/></ListItemIcon>
                        <ListItemText primary="States" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><EqualizerIcon/></ListItemIcon>
                        <ListItemText primary="Rank" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><HelpIcon/></ListItemIcon>
                        <ListItemText primary="Help" />
                    </ListItem>
                </List>
            </div>
        );
        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar position="fixed">
                    <Toolbar>
                        <Hidden smUp>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={this.handleDrawerToggle}
                                className={classes.menuButton}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Hidden>

                        <Hidden xsDown>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                className={classes.menuButton}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Hidden>

                        <Typography variant="h6" noWrap>
                            武科大ACM俱乐部
                        </Typography>
                    </Toolbar>
                </AppBar>
                <nav className={classes.drawer} aria-label="mailbox folders">
                    <Hidden smUp implementation="css">
                        <Drawer
                            variant="temporary"
                            open={this.state.mobileOpen}
                            onClose={this.handleDrawerToggle}
                            classes={{paper: classes.drawerPaper}}
                            ModalProps={{keepMounted: true}}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <Hidden xsDown implementation="css">
                        <Drawer
                            classes={{paper: classes.drawerPaper}}
                            variant="permanent"
                            open
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                </nav>
            </div>
        );
    }
}

export default withStyles(useStyles)(DrawerNav)
