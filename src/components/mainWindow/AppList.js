import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CloseIcon from '@material-ui/icons/Close';
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing.unit * 1.5,
        marginLeft: 57,
        marginTop: 36
    },
    sectionHeader: {
        margin: theme.spacing.unit*1.5,
        fontWeight: 600
    },
    card: {
        display: 'inline-block',
        width: 300,
        float: 'left',
        margin: theme.spacing.unit*1.5
    }
});

function Header(props) {
  const { classes, appList, closeApp } = props;
  console.log(`Rendering AppList with ${Object.keys(appList).length} apps`);
  return (
    <main className={classes.root}>
        <h3 className={classes.sectionHeader}>Open Apps</h3>
        {
            Object.entries(appList).map(entry=>{
                return (                    
                    <Card key={entry[0]} className={classes.card}>
                        <CardHeader
                            avatar={
                                <Avatar alt={entry[1]['startup_app'].name}
                                    src={entry[1].shortcut && entry[1].shortcut.icon || entry[1]['startup_app'].icon} 
                                />
                            }
                            action={
                                <IconButton size="small" aria-label="Close App" onClick={()=>closeApp(entry[0])}>
                                    <CloseIcon />
                                </IconButton>
                            }
                            title={entry[1]['startup_app'].name}
                            subtitle={entry[1].shortcut && entry[1].shortcut.company}
                        />
                        <CardContent>
                            <Typography component="p">
                                {
                                    entry[1]['startup_app'].description || (entry[1].shortcut && entry[1].shortcut.description)
                                }
                            </Typography>
                        </CardContent>
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
