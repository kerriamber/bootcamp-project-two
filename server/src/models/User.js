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
    this.dataValues.password = await bcrypt.hash(password, saltRounds);
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
        // allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        // allowNull: false,
        // validate: {
        //   notNull: {
        //     msg: 'Please enter a password',
        //   },
        //   // ! Now that we utilize hooks, we can include the password length validation here.
        //   len: {
        //     args: [8, 20],
        //     msg: 'Your password must be between 8 and 20 characters',
        //   },
        // },
      },
    },
    {
      hooks: {
        beforeCreate: async (user) => {
          console.log('User::beforeCreate');
          
          console.log(user);
          await user.setPassword(user.dataValues.password);
        },
        beforeUpdate: async (user) => {
          await user.setPassword(user.password);
        },
      },
      sequelize,
      timestamps: false,
      underscored: true,
      modelName: "user",
    }
  );

  return User;
}
