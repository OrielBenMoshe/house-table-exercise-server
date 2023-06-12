"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const houses_1 = require("../models/houses");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const connection = new sequelize_typescript_1.Sequelize({
    dialect: "postgres",
    host: "127.0.0.1",
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    logging: false,
    models: [houses_1.Houses],
});
exports.default = connection;
//# sourceMappingURL=config.js.map