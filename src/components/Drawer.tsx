import React from "react";
import {
    AppBar, Button,
    createStyles, CssBaseline,
    Drawer, Hidden, IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText, ListSubheader,
    Theme, Toolbar, Typography,
    withStyles
} from "@material-ui/core";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

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
                flexGrow: 1
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
            title: {
                flexGrow: 1
            }
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
            <div className={classes.root}>
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

                        <Typography className={classes.title} variant="h6" noWrap>
                            Online Judge
                        </Typography>

                        <Button color="inherit" variant="outlined" startIcon={<AccountCircleIcon/>}>Login</Button>
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
