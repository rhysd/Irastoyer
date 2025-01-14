import path = require('path');
import fs = require('fs');
import { app, BrowserWindow, ipcMain } from 'electron';
import setMenu from './menu';
import {scrapeAllIrasuto, Irasuto} from 'node-irasutoya';

const index_html = 'file://' + path.join(__dirname, '..', '..', 'index.html');

global.cache_path = path.join(app.getPath('userData'), 'irasutoya.json');
app.on('ready', () => {
    let win = new BrowserWindow({
        width: 800,
        height: 1000,
        titleBarStyle: process.platform === 'darwin' ? 'hidden-inset' : undefined,
        useContentSize: true,
    });

    win.on('closed', () => {
        win = null;
        app.quit();
    });

    win.loadURL(index_html);

    setMenu();
});

ipcMain.on('scraping:start', (event: any) => {
    const sender: GitHubElectron.WebContents = event.sender;
    scrapeAllIrasuto({retry: 3, verbose: true})
        .then((is: Irasuto[]) => JSON.stringify(is))
        .then((json: string) => {
            fs.writeFileSync(global.cache_path, json, 'utf8');
            sender.send('scraping:end');
        }).catch(e => {
            sender.send('scraping:error', e);
        });
})
