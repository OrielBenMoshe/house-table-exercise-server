"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const house_1 = require("../controllers/house");
const router = (0, express_1.Router)();
// create a new house record in the database.
router.post("/", house_1.createHouse);
// fetch a house record.
router.get("/:id", house_1.getHouse);
// update a house record.
router.put("/:id", house_1.updateHouse);
exports.default = router;
//# sourceMappingURL=houses.js.map