import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import DownloadIcon from '@material-ui/icons/GetApp';
import Divider from '@material-ui/core/Divider';

import green from '@material-ui/core/colors/green';

import MainWindow from './MainWindow.js';
import LogoIcon from './LogoIconWhite';

const webDirectory = window.location.href.substring(0, window.location.href.lastIndexOf('/'));
const downloadLocation = `https://install.openfin.co/download/?config=${encodeURI(webDirectory+'/app_'+window.location.hostname+'.json')}&fileName=FinTools%20App%20Manager%20Installer&unzipped=true`


const styles= theme=>({
    webPreview: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        background: 'radial-gradient(#8593e3,#263481)',
        color: '#fff',
        padding: theme.spacing.unit*4,
        paddingTop: theme.spacing.unit*2,
        overflow: 'hidden'
    },
    previewContainer: {
        width: 800,
        height: 500,
        position: 'relative',
        overflow: 'none',
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor:'#fff',
        boxShadow: '4px 4px 10px rgba(0,0,0,0.1)'
    },
    downloadButton: {
        fontSize: '1.5rem',
        color: 'rgba(0,0,0,0.75)',
        backgroundColor: '#59cf5f',
        '&:hover':{
            backgroundColor: '#4bbf50'
        }
    },
    buttonContainer: {
        zIndex: 4000,
        position: 'relative',
        width: '300px',
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: theme.spacing.unit*4,
        marginBottom: theme.spacing.unit*4
    },
    appLogo: {
        fontSize: '3em',
        marginBottom: '-0.2em',
        marginRight: theme.spacing.unit
    },
    pageTitle: {
        display: 'inline-block',
        fontSize: 30,
        fontWeight: 'normal',
        margin: 0
    },
    divider: {
        backgroundColor: 'rgba(255,255,255,0.18)',
        marginTop: theme.spacing.unit*2
    }

});

const WebPreview = ({classes}) => (
    <div className={`WebPreview ${classes.webPreview}`}>
        <Grid container>
            <Grid item xs={8}>
                <LogoIcon className={classes.appLogo}></LogoIcon>
                <h1 className={classes.pageTitle}>
                    FinTools App Manager
                </h1>
            </Grid>
            <Grid item xs={4}>Socials</Grid>
        </Grid>
        <Divider className={classes.divider} />
        <div>
        </div>
        <div className={classes.buttonContainer}>
            <Fab variant="extended" color="primary" aria-label="Add" className={classes.downloadButton} href={downloadLocation}>
                <DownloadIcon className={classes.extendedIcon} />
                Download
            </Fab>
        </div>
        <div className={classes.previewContainer} >
            <MainWindow />
        </div>
    </div>
);

WebPreview.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
};

export default withStyles(styles, {withTheme:true})(WebPreview);