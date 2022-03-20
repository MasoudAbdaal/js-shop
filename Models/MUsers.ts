import { existsSync, readFile, writeFile } from "fs";
import moment from "moment";
import { v5 } from "uuid";

import IUserEntity from "../Interfaces/IUserEntity";

class UsersList {
  fileExist: boolean;
  filePath: string;

  constructor() {
    this.filePath = "./UserData.json";
    this.fileExist = existsSync(this.filePath);
  }

  AddUser(newUser: IUserEntity) {
    newUser.ID = v5(newUser.UserName, "67ce8d95-6b86-416f-aea2-655f56825829");
    newUser.CreationDate = moment(new Date(Date.now())).format(
      "YYYY-MM-DD HH:MM:SS"
    );

    if (this.fileExist) {
      readFile(this.filePath, (e, data) => {
        if (e === null) {
          const fileContent = JSON.parse(data.toString()) as Array<IUserEntity>;
          fileContent.push(newUser);
          this.WriteToFile(this.filePath, fileContent);
        } else throw e;
      });
    } else this.WriteToFile(this.filePath, [newUser]);
  }

  EditUser() {}

  FetchUsers(index?: number) {}

  /**
   *
   * @param Path
   * @param Content "Final element should be modified or something has been taken last changes"
   */
  private WriteToFile(Path: string, Content: Array<IUserEntity>) {
    Content[Content.length - 1].ModificationDate = moment(
      new Date(Date.now())
    ).format("YYYY-MM-DD HH:MM:SS");

    writeFile(
      Path,
      JSON.stringify(Content),
      "utf8",
      (err) => err && console.debug(err)
    );
  }
}
export default UsersList;
