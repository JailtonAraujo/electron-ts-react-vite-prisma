import { User } from "../../model/User";

const IPC_NAME = "user";

const createNewUser = async (prisma:any, userData:User) => {
    return await prisma.sys_user.create({
      data:userData
    });
}

export function setupUserIpcHandlers(ipcMain:any, prisma:any) {
  ipcMain.handle(`${IPC_NAME}:create`, async (event:any, userData:User) => {
    return await createNewUser(prisma, userData);
  });
}
