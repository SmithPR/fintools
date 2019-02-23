

async function getOpenApps(){
    let manifestPromises = [];
    const appsMap = {};
    const appsPromise = new Promise( (resolve, reject) => {

        window.fin.desktop.System.getAllApplications(appsArray=>{
            for(let app of appsArray){
                if(app.isRunning){
                    //Fetch each app's manifest
                    manifestPromises.push(new Promise( (resolveInner, reject) =>{
                        let finApp = window.fin.desktop.Application.wrap(app.uuid);
                        finApp.getManifest( appManifest=>{
                            console.debug(appManifest);
                            appsMap[app.uuid] = appManifest;
                            resolveInner(true);
                        });
                    }));
                }
            }
            console.debug(appsArray);
            resolve(true);
        }, reject);
    });
    await appsPromise;
    await Promise.all(manifestPromises);
    return appsMap;
};

async function getOpenAppsAndRetry(){
    let openApps;
    if(!window.fin){
        return Promise.reject();
    }else{
        while(!openApps){
            try {
                openApps = await getOpenApps();
            }catch(err){
                await new Promise( resolve => setTimeout(resolve, 50));
            }
        }
        return openApps;
    }
}

async function closeApp(uuid){
    const finApp = window.fin.desktop.Application.wrap(uuid);
    return new Promise( (resolve, reject) => {
        try {
            finApp.close(true, resolve, reject);
        }catch(err){
            resolve();
        }
    });
};

export default { getOpenApps: getOpenAppsAndRetry, closeApp };

