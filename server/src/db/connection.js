import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const { DB_NAME, DB_USER, DB_PASSWORD, DB_URL } = process.env;
const sequelize = DB_URL
  ? new Sequelize(DB_URL)
  : new Sequelize(DB_NAME || "", DB_USER || "", DB_PASSWORD || "", {
      host: "localhost",
      dialect: "postgres",
      dialectOptions: {
        decimalNumbers: true,
      },
    });

export default sequelize;
