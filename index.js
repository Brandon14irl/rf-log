const electron = require("electron")
const { app, BrowserWindow, } = require('electron')
const Menu = electron.Menu
const MenuItem = electron.MenuItem

function mainWindow () {
  let win = new BrowserWindow({
    width: 500,
    height: 350,
    resizable: false,
    webPreferences: {
      nodeIntegration: true
    },
  })
  win.loadFile('./main/index.html')

  const menuBar = [
    {
      label: "File",
      submenu: [
        {
          label: "Settings",
          click: function(){
            console.log("settings pressed")
          }
        },
        {
          label: "Exit",
          click: function(){
            console.log("exit pressed")
          }
        }
      ]
    },
    {
    label: "View",
    submenu: [
      {
        label: "Log",
        click: function(){
          console.log("log pressed")
        }
      }
    ]
  },
  {
    label: "About",
    submenu: [
      {
        label: "Documentation",
        click: function(){
          console.log("documentation pressed")
        }
      }
    ]
  }
  ]

    const menu = Menu.buildFromTemplate(menuBar)
    Menu.setApplicationMenu(menu)

    const context = new Menu()
    context.append(new MenuItem({
      label: "Test",
      click: function(){
        console.log("test pressed")
      }
    }))

    win.webContents.on('context-menu', function(e, params){
      context.popup(win, params.x, params.y)
    })

}

app.whenReady().then(mainWindow)
