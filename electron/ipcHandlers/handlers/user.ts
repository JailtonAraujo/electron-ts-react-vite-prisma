import { User } from "../../model/User";
import { Tools } from "../Tools";


const IPC_NAME = "user";

const hashPassword = async (plainPassword:string, bcrypt:any) => {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(plainPassword, salt);
  return hashedPassword;
}

const createNewUser = async (prisma:any, userData:User, bcrypt:any) => {
    const passHash = await hashPassword(userData.password, bcrypt);
    return await prisma.sys_user.create({
      data:{
        ...userData,
        password:passHash
      }
    });
}

export function setupUserIpcHandlers(tools:Tools) {
  const {prisma, ipcMain, bcrypt} = tools;

  ipcMain.handle(`${IPC_NAME}:create`, async (event:any, userData:User) => {
    return await createNewUser(prisma, userData, bcrypt);
  });
}
