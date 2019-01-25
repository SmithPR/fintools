import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    outerBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    headerBar: {
        minHeight: '36px'
    },
    appTitle: {
        flexGrow: 1,
        textAlign: 'left',
        fontSize: '1em'
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
        padding: '4px 12px',
        // transform: 'scale(.75,.75)'
    },
});

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
            Openfin App Manager
          </Typography>
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
