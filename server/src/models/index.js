import sequelize from "../db/connection.js";
import { PostFactory } from "./Post.js";
import { UserFactory } from "./User.js";

const Post = PostFactory(sequelize);
const User = UserFactory(sequelize);

User.hasMany(Post, {
  onDelete: "CASCADE",
});

Post.belongsTo(User);

export { sequelize, User, Post };
