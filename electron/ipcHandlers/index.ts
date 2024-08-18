import {setupCustomersIpcHandlers} from './handlers/customers';
import {setupUserIpcHandlers} from './handlers/user';

export const setupIpcHandless = (ipcMain:Electron.IpcMain, prisma:any) => {
    setupCustomersIpcHandlers(ipcMain, prisma);
    setupUserIpcHandlers(ipcMain, prisma);
}

