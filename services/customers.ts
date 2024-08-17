const { ipcMain } = require('electron');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

ipcMain.handle('customer:list', async () => {
    return await prisma.people.findMany();
});