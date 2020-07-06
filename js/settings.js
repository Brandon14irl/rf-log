const electron = require("electron")
const { app, BrowserWindow, } = require('electron')
module.exports = {

       settingWindow: function() {
            let set = new BrowserWindow({
              width: 450,
              height: 300,
              resizable: false,
              webPreferences: {
                nodeIntegration: true
              },
            })
            set.loadFile('./pages/settings.html')  
        },

        lightOn: function() {
          db.get('settings')
          .push({ light: document.getElementById("lightRadio").value })
          .write()
      }



        }; 




