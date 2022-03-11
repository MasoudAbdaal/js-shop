import { IUserPassword } from "../Controller/CAdmin";
import { appendFile, existsSync, readFile, writeFile } from "fs";

class UsersList {
  fileExist: boolean;
  filePath: string;

  constructor() {
    this.filePath = "./UserData.txt";
    this.fileExist = existsSync(this.filePath);
  }
  //TODO: Create user in UserData file append
  AddUser(newUser: IUserPassword) {
    if (this.fileExist) {
      readFile(this.filePath, (e, data) => {
        const fileContent = JSON.parse(data.toString()) as Array<IUserPassword>;
        fileContent.push(newUser);
        this.WriteToFile(this.filePath, JSON.stringify(fileContent));
      });
    } else this.WriteToFile(this.filePath, JSON.stringify([newUser]));
  }

  private WriteToFile(Path: string, Content: string) {
    writeFile(Path, Content, "utf8", (err) => err && console.debug(err));
  }

  FetchUsers(index?: number) {}
}
export default UsersList;
