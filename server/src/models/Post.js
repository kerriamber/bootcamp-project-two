import { DataTypes, Model } from "sequelize";
import sequelize from "../db/connection.js";

export class Post extends Model {}

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
      text: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      coffee: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      joke: {
        type: DataTypes.TEXT,
        alowNull: false,
      }
    },
    {
      sequelize,
      timestamps: true,
      modelName: "post",
    }
  );

  return Post;
}
