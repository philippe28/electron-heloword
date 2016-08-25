const {app, BrowserWindow} = require('electron')

let win

function createWindow(){
  win = new BrowserWindow({
    width:800,
    height:600
  });

  win.loadURL(`file://${__dirname}/index.html`)

  win.on('closed', ()=>{
    win = null;
  })

  win.webContents.on('devtools-opened', () => {
    win.webContents.closeDevTools();
  })

}

app.on('ready', createWindow)

app.on('all-window-closed', () =>{
  app.quit();
})
