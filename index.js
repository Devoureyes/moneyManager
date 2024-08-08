const { app, BrowserWindow } = require('electron/main')
const path = require('path')
const env = process.env.NODE_ENV || 'development';


function createWindow () {
    const win = new BrowserWindow({
        title:"Нахуй долги",
        width: 1200,
        height: 1000,
        autoHideMenuBar:true,
        webPreferences: {
            nodeIntegration:true,
            allowRendererProcessReuse: false,
            enableRemoteModule: true,
            contextIsolation: false,
            // preload: path.join(__dirname, 'preload.js')
        }
    })

    win.loadFile('index.html')
    // win.webContents.openDevTools()
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})
// If development environment
if (env === 'development') {
    try {
        require('electron-reloader')(module, {
            debug: true,
            watchRenderer: true
        });
    } catch (_) { console.log('Error'); }
}
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})