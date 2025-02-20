import { DataTypes, Model } from "sequelize";
import bcrypt from "bcrypt";
import sequelize from "../db/connection.js";

export class User extends Model {
  id;
  username;
  email;
  password;

  async setPassword(password) {
    const saltRounds = 10;
    console.log('setPassword() user model');
    this.password = await bcrypt.hash(password, saltRounds);
  }
}

export function UserFactory() {
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      modelName: "user",
      sequelize,
      hooks: {
        beforeCreate: async (user) => {
          console.log('User::beforeCreate');
          
          console.log(user);
          await user.setPassword(user.password);
        },
        beforeUpdate: async (user) => {
          await user.setPassword(user.password);
        },
      },
    }
  );

  return User;
}
