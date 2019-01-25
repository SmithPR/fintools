import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';

const drawerWidth = 220;

const styles = theme => ({
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing.unit * 7 + 1,
            [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 9 + 1,
        },
    },
    toolbar: {
        minHeight: '36px'
    },
});

function Sidebar(props){
    const { classes } = props;
    return (
        <Drawer
          variant="permanent"
          className={classNames(classes.drawer, {
            [classes.drawerOpen]: props.expanded,
            [classes.drawerClose]: !props.expanded,
          })}
          classes={{
            paper: classNames({
              [classes.drawerOpen]: props.expanded,
              [classes.drawerClose]: !props.expanded,
            }),
          }}
          open={props.expanded}
        >
            <div className={classes.toolbar} />
            <List>
              
                <ListItem button key="home" selected>
                    <ListItemIcon><HomeIcon /></ListItemIcon>
                    <ListItemText primary={'Home'} />
                </ListItem>

                <ListItem button key="directory">
                    <ListItemIcon><SearchIcon /></ListItemIcon>
                    <ListItemText primary="Discover Apps" />
                </ListItem>

                <ListItem button key="create">
                    <ListItemIcon><AddIcon /></ListItemIcon>
                    <ListItemText primary="Create an App" />
                </ListItem>
            
            </List>
          {/*<Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>*/}
        </Drawer>
    );
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, {withTheme:true})(Sidebar);