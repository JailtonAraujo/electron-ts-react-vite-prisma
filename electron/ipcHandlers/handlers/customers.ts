import { User } from "../../model/User";

const createNewUser = async (prisma:any, userData:User) => {

}


export function setupCustomersIpcHandlers(ipcMain:any, prisma:any) {
  ipcMain.handle('customer:post', async (event:any, userData:User) => {
    return await createNewUser(prisma, userData);
  });
}
