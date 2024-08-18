import { Tools } from './Tools';
import {setupCustomersIpcHandlers} from './handlers/customers';
import {setupUserIpcHandlers} from './handlers/user';

export const setupIpcHandless = (tools:Tools) => {
    //setupCustomersIpcHandlers(ipcMain, prisma);
    setupUserIpcHandlers(tools);
}

