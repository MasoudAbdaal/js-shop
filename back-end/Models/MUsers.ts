import { existsSync, readFile, readFileSync, writeFile } from "fs";
import moment from "moment";
import path from "path";
import { v5 } from "uuid";

import IUserEntity from "../Interfaces/IUserEntity";

class UsersList {
  FileExist: boolean;
  FilePath: string;

  constructor() {
    this.FilePath = path.join(__dirname, "../UserData.json");
    this.FileExist = existsSync(this.FilePath);
  }

  AddUser(newUser: IUserEntity) {
    newUser.ID = v5(newUser.UserName, "67ce8d95-6b86-416f-aea2-655f56825829");
    newUser.CreationDate = moment
      .utc(new Date().toUTCString())
      .format("YYYY-MM-DD H:m:s");

    //TODO: Fix sync functions and properties which cause of exeptions

    if (this.FileExist) {
      const fileContent = JSON.parse(
        readFileSync(this.FilePath, "utf8")
      ) as Array<IUserEntity>;
      fileContent.push(newUser);
      this.WriteToFile(this.FilePath, fileContent);
      return newUser;
    } else {
      this.WriteToFile(this.FilePath, [newUser]);
      return newUser;
    }
  }

  EditUser() {}

  FetchUsers(index?: number) {}

  /**
   *
   * @param Path
   * @param Content "Final element should be modified or something has been taken last changes"
   */
  private WriteToFile(Path: string, Content: Array<IUserEntity>) {
    Content[Content.length - 1].ModificationDate = moment
      .utc(new Date().toUTCString())
      .format("YYYY-MM-DD H:m:s");

    writeFile(
      Path,
      JSON.stringify(Content),
      "utf8",
      (err) => err && console.debug(err)
    );
  }
}
export default UsersList;
