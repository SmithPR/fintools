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
import CloseIcon from '@material-ui/icons/Close';

const styles = theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        marginLeft: 57,
        marginTop: 36
    },
    card: {
        display: 'flex',
        marginBottom: theme.spacing.unit*1.5,
        height: 48
    },
    cardRightInner: {
        padding: theme.spacing.unit/2,
        paddingBottom: theme.spacing.unit/2
    },
    appIcon: {
        width: 48,
        height: 48
    },
    cardRight: {
        flex: '1 1 0',
    }
});

function Header(props) {
  const { classes, appList, closeApp } = props;
  return (
    <main className={classes.root}>
        {
            Object.entries(appList).map(entry=>{
                return (
                    <Card key={entry[0]} className={classes.card}>
                        <CardMedia className={classes.appIcon} image={
                            entry[1].shortcut && entry[1].shortcut.icon || 
                            entry[1]['startup_app'] && entry[1]['startup_app'].applicationIcon
                        }/>
                        <div className={classes.cardRight}>
                            <CardContent className={classes.cardRightInner}>
                                <Typography component="strong" variant="subtitle1">
                                    {
                                        entry[1].shortcut && entry[1].shortcut.description ||
                                        entry[1]['startup_app'] && entry[1]['startup_app'].name
                                    }
                                </Typography>
                                <Typography component="strong" variant="subtitle2">
                                    {
                                        entry[1].shortcut && entry[1].shortcut.company ||
                                        entry[1].supportInformation && entry[1].supportInformation.company
                                    }
                                </Typography>
                            </CardContent>
                        </div>
                        <CardActions>
                            <IconButton aria-label="Close App" onClick={()=>closeApp(entry[0])}>
                                <CloseIcon />
                            </IconButton>
                        </CardActions>
                    </Card>
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
