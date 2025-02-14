import { DataTypes, Model } from "sequelize";
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
      title: {},
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
}
