const { app, BrowserWindow } = require('electron')

function mainWindow () {
  let win = new BrowserWindow({
    width: 500,
    height: 350,
    webPreferences: {
      nodeIntegration: true
    },
  })
  win.loadFile('./app/index.html')
}

app.whenReady().then(mainWindow)
