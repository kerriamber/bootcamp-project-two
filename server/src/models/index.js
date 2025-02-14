import sequelize from "../db/connection.js";
import { PostFactory } from "./Post";
import { UserFactory } from "./User";

const Post = PostFactory(sequelize);
const User = UserFactory(sequelize);

User.hasMany(Post, {
  onDelete: "CASCADE",
});

Post.belongsTo(User);
