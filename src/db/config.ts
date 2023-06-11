import path from "path";
import { Sequelize } from "sequelize-typescript";
import { Houses } from "../models/houses";
import dotenv from "dotenv";
dotenv.config();

const connection = new Sequelize({
  dialect: "postgres",
  host: "127.0.0.1",
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  logging: false,
  models: [Houses],
});
export default connection;
