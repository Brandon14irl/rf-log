const electron = require("electron")
const { app, BrowserWindow, } = require('electron')
module.exports = {

       settingWindow: function() {
            let set = new BrowserWindow({
              width: 500,
              height: 350,
              resizable: false,
              webPreferences: {
                nodeIntegration: true
              },
            })
            set.loadFile('./settings/index.html')  
        }
}