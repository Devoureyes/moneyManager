const { app, BrowserWindow } = require('electron/main')

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

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})