
import { BaseDatatabase } from "./BaseDatabase";

import { TABLE_USERS } from "./tableNames";



export class UserDatabase extends BaseDatatabase{

    protected static  tableNames = TABLE_USERSS
  getAllUsers = async () => {
    const result = await UserDatabase.connection(UserDatabase.tableNames).select()
  }
  createUser(){

  } 
  getUserById(){

  }


}