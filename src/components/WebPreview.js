import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Fab from '@material-ui/core/Fab';
import DownloadIcon from '@material-ui/icons/GetApp';

import green from '@material-ui/core/colors/green';

import MainWindow from './MainWindow.js';

const webDirectory = window.location.href.substring(0, String.lastIndexOf(window.location.href, '/'));
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
    }

});

const WebPreview = ({classes}) => (
    <div className={`WebPreview ${classes.webPreview}`}>
        <div>
            <h1>FinTools App Manager</h1>
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