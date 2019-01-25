import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

const styles = theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        marginLeft: 57,
        marginTop: 36
    }
});

function Header(props) {
  const { classes, finApps } = props;
  return (
    <main className={classes.root}>
        {
            Object.entries(finApps).map(entry=>{
                return (
                    <span key={entry[0]}>{entry[1]['startup_app'].name}</span>
                )
            })
        }          
        </main>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, {withTheme:true})(Header);
