import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    flexGrow: 1,
  },
  headerBar: {
      minHeight: '36px'
  },
  appTitle: {
    flexGrow: 1,
    textAlign: 'left',
    fontSize: '1rem'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    padding: '6px 8px'
  },
};

function Header(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense" className={classes.headerBar}>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.appTitle}>
            Openfin App Manager
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Discover</Button>
          <Button color="inherit">Create</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
