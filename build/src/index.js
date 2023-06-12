"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = process.env.PORT || 9000;
const houses_1 = __importDefault(require("./routes/houses"));
const config_1 = __importDefault(require("./db/config"));
/** Middlewares */
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
/** End Points */
app.get("/", (req, res) => {
    res.send("Server is up and running!");
});
/** Routes */
app.use("/api/houses", houses_1.default);
config_1.default
    .sync()
    .then(() => {
    console.log("Database synced successfully");
    app.listen(port, () => {
        console.log(`Server is listening on ${port}`);
    });
})
    .catch((err) => {
    console.log("Err:", err);
});
//# sourceMappingURL=index.js.map