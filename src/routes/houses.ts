import { Router } from "express";
import { createHouse, getHouse, updateHouse } from "../controllers/house";

const router = Router();

// create a new house record in the database.
router.post("/", createHouse);

// fetch a house record.
router.get("/:id", getHouse);

// update a house record.
router.put("/:id", updateHouse);

export default router;
