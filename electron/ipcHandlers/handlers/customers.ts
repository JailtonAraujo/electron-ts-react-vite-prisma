import { User } from "../../model/User";
import { Tools } from "../Tools";

const IPC_NAME = "customer";

const createNewCustomer = async (prisma: any, userData: User, bcrypt: any) => {

}


export function setupCustomersIpcHandlers(tools: Tools) {
  const { prisma, ipcMain, bcrypt } = tools;

  ipcMain.handle(`${IPC_NAME}:create`, async (event: any, userData: User) => {
    return await createNewCustomer(prisma, userData, bcrypt);
  });
}
