

async function getOpenApps(){
    if(!window.fin){
        return Promise.reject();
    }else{
        let manifestPromises = [];
        const appsMap = {};
        const appsPromise = new Promise( (resolve, reject) => {

            window.fin.desktop.System.getAllApplications(appsArray=>{
                for(let app of appsArray){

                    //Fetch each app's manifest
                    manifestPromises.push(new Promise( (resolveInner, reject) =>{
                        let finApp = window.fin.desktop.Application.wrap(app.uuid);
                        finApp.getManifest( appManifest=>{
                            console.log(appManifest);
                            appsMap[app.uuid] = appManifest;
                            resolveInner(true);
                        });
                    }, reject));
                }
                resolve(true);
            }, reject);
        });
        await appsPromise;
        await Promise.all(manifestPromises);
        return appsMap;
    }
};

async function closeApp(uuid){
};

export default { getOpenApps, closeApp };

