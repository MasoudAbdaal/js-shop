import { existsSync, readFileSync, writeFile } from "fs";

import { v5 } from "uuid";
import moment from "moment";
import path from "path";

import IUserEntity from "../Interfaces/IUserEntity";

class UsersList {
  FileExist: boolean;
  FilePath: string;
  Users: () => Array<IUserEntity> | string | undefined;

  constructor() {
    this.FilePath = path.join(__dirname, "../UserData.json");
    this.FileExist = existsSync(this.FilePath);
    this.Users = () => {
      try {
        if (this.FileExist) {
          return JSON.parse(
            readFileSync(this.FilePath, "utf8")
          ) as Array<IUserEntity>;
        }
      } catch (error) {
        return error as string;
      }
    };
  }

  AddUser(newUser: IUserEntity) {
    newUser.ID = v5(newUser.UserName, "67ce8d95-6b86-416f-aea2-655f56825829");
    newUser.CreationDate = moment
      .utc(new Date().toUTCString())
      .format("YYYY-MM-DD H:m:s");

    //TODO: Overwrite this lines using new property Users
    const fileContent = this.Users();
    if (fileContent && typeof fileContent !== "string") {
      fileContent.push(newUser);
      this.WriteToFile(this.FilePath, fileContent);
      return newUser;
    } else {
      this.WriteToFile(this.FilePath, [newUser]);
      return newUser;
    }
  }

  EditUser() {}

  GetAllUsers(): Array<IUserEntity> {
    const AllUsers = this.Users();
    if (AllUsers && typeof AllUsers !== "string") {
      return AllUsers;
    } else return [] as IUserEntity[];
  }

  FetchUser(UserId: string): IUserEntity {
    // const fileContent = JSON.parse(
    //   readFileSync(this.FilePath, "utf8")
    // ) as Array<IUserEntity>;
    const Users = this.Users();
    if (Users && typeof Users !== "string") {
      return Users.find((z) => z.ID == UserId && z) || ({} as IUserEntity);
    } else {
      console.debug("Error While Calling Method FetchUser()", Users);
      return {} as IUserEntity;
    }
  }

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
