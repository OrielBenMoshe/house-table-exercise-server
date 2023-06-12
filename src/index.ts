import express from "express";
import cors from "cors";
const app = express();
const port = process.env.PORT || 9000;
import houseRoutes from "./routes/houses";
import connection from "./db/config";

/** Middlewares */
app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

/** End Points */
app.get("/", (req, res) => {
  res.send("Server is up and running!");
});

/** Routes */
app.use("/api/houses", houseRoutes);

connection
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
