"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateHouse = exports.getHouse = exports.createHouse = void 0;
const houses_1 = require("./../models/houses");
const riskCalcModel = (currentValue, loanAmount) => {
    let risk = loanAmount / currentValue;
    return loanAmount > 0.5 * currentValue ? risk * 1.1 : risk;
};
/** POST */
const createHouse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { address, currentValue, loanAmount } = req === null || req === void 0 ? void 0 : req.body;
    // Validation
    if (!(address && currentValue && loanAmount))
        return res.status(400).json({ msg: "No parameters received" });
    try {
        // Check if the address already exists in the database
        const existingHouse = yield houses_1.Houses.findOne({ where: { address } });
        if (existingHouse) {
            return res.status(400).json({
                success: false,
                msg: "The address already exists in the system!",
            });
        }
        const house = {
            address,
            currentValue,
            loanAmount,
            risk: riskCalcModel(currentValue, loanAmount),
        };
        const result = yield houses_1.Houses.create(house);
        res.status(200).json({
            success: true,
            msg: "New record successfully created!",
            data: result,
        });
    }
    catch (error) {
        console.log(error === null || error === void 0 ? void 0 : error.original);
        res.status(500).json({
            success: false,
            error: error === null || error === void 0 ? void 0 : error.original,
        });
    }
});
exports.createHouse = createHouse;
/** GET */
const getHouse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const result = yield houses_1.Houses.findByPk(id);
        res.status(200).json({
            success: true,
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
exports.getHouse = getHouse;
/** PUT */
const updateHouse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { address, currentValue, loanAmount } = req === null || req === void 0 ? void 0 : req.body;
        // Validation
        if (!(address && currentValue && loanAmount && id))
            return res.status(400).json({ msg: "Cannot accept empty parameters" });
        let risk = riskCalcModel(currentValue, loanAmount);
        const result = yield houses_1.Houses.update({ address, currentValue, loanAmount, risk }, {
            where: { id },
            returning: true,
        });
        res.status(200).json({
            success: true,
            msg: "The update was successful.",
            data: result[1][0],
        });
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
exports.updateHouse = updateHouse;
//# sourceMappingURL=house.js.map