import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/CloseSharp';
import MinimizeIcon from '@material-ui/icons/MinimizeSharp';
import MaximizeIcon from '@material-ui/icons/CheckBoxOutlineBlankSharp';

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    outerBar: {
        zIndex: theme.zIndex.drawer + 1,
        ['-webkit-app-region']: 'drag',
        paddingLeft: 1,
        paddingRight: 1,
        position: 'absolute'
    },
    headerBar: {
        minHeight: '36px',
        paddingLeft: 0,
        paddingRight: 0
    },
    appTitle: {
        flexGrow: 1,
        textAlign: 'left',
        fontSize: '1em'
    },
    menuButton: {
        ['-webkit-app-region']: 'no-drag',
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit*4,
        padding: '6px 6px',
    },
    actionArea: {
        
    },
    actionButton: {
        ['-webkit-app-region']: 'no-drag',
        padding: '6px 6px',
        margin: 0,
        marginRight: theme.spacing.unit
    },
    actionButtonIcon: {
        fontSize: 16
    }
});

const minimizeApp = e => {
    if(window.fin){
        window.fin.desktop.Window.getCurrent().minimize();
    }
};
const maximizeApp = e => {
    if(window.fin){
        window.fin.desktop.Window.getCurrent().maximize();
    }
};
const closeApp = e => {
    if(window.fin){
        window.fin.desktop.Application.getCurrent().close();
    }
};

function Header(props) {
  const { classes, toggleSidebar } = props;
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.outerBar}>
        <Toolbar variant="dense" className={classes.headerBar}>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={toggleSidebar}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.appTitle}>
            FinTools App Manager
          </Typography>
          <div className={classes.grow} />
          <div>
            <IconButton className={classes.actionButton} color="inherit" aria-label="Menu" onClick={minimizeApp}>
              <MinimizeIcon className={classes.actionButtonIcon} />
            </IconButton>
            <IconButton className={classes.actionButton} color="inherit" aria-label="Menu" onClick={maximizeApp}>
              <MaximizeIcon className={classes.actionButtonIcon} />
            </IconButton>
            <IconButton className={classes.actionButton} color="inherit" aria-label="Menu" onClick={closeApp}>
              <CloseIcon className={classes.actionButtonIcon} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, {withTheme:true})(Header);
