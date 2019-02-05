import React, { Component } from 'react';

import MainWindow from './MainWindow.js';

const WebPreview = () => (
    <div className="web-preview">
        <div style={{width: 800, height: 500, position: 'absolute', overflow: 'none'}} >
            <MainWindow />
        </div>
    </div>
);

export default WebPreview;
