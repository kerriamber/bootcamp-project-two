import { DataTypes, Model } from "sequelize";
import bcrypt from "bcrypt";
import sequelize from "../db/connection.js";

export class User extends Model {
  async setPassword(password) {
    const saltRounds = 10;
    // console.log('setPassword() user model');
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
        unique: true,
        allowNull: false,
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
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      hooks: {
        beforeCreate: async (user) => {
          await user.setPassword(user.password);
        },
        beforeUpdate: async (user) => {
          await user.setPassword(user.password);
        },
      },
      sequelize,
      timestamps: false,
      underscored: true,
      modelName: "user",
    },
  );

  return User;
}
