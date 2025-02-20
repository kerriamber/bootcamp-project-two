import { DataTypes, Model } from "sequelize";
import sequelize from "../db/connection.js";
import bcrypt from "bcrypt";

export class Post extends Model {
  id;
  text;
}

export function PostFactory() {
  Post.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      author: {
        type: DataTypes.INTEGER,
      },
      text: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: true,
      modelName: "post",
    }
  );

  return Post;
}
