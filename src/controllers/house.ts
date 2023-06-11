import { Houses } from "./../models/houses";
import express, { Request, Response } from "express";
import { HouseAttribute } from "../services/types";

const riskCalcModel = (currentValue: number, loanAmount: number) => {
  let risk = loanAmount / currentValue;
  return loanAmount > 0.5 * currentValue ? risk * 1.1 : risk;
};

/** POST */
export const createHouse = async (req: Request, res: Response) => {
  const { address, currentValue, loanAmount } = req?.body;
  // Validation
  if (!(address && currentValue && loanAmount))
    return res.status(400).json({ msg: "No parameters received" });

  try {
    // Check if the address already exists in the database
    const existingHouse = await Houses.findOne({ where: { address } });

    if (existingHouse) {
      return res.status(400).json({
        success: false,
        msg: "The address already exists in the system!",
      });
    }

    const house: HouseAttribute = {
      address,
      currentValue,
      loanAmount,
      risk: riskCalcModel(currentValue, loanAmount),
    };

    const result = await Houses.create(house);
    res.status(200).json({
      success: true,
      msg: "New record successfully created!",
      data: result,
    });
  } catch (error) {
    console.log(error?.original);

    res.status(500).json({
      success: false,
      error: error?.original,
    });
  }
};

/** GET */
export const getHouse = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await Houses.findByPk(id);
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

/** PUT */
export const updateHouse = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { address, currentValue, loanAmount } = req?.body;

    // Validation
    if (!(address && currentValue && loanAmount && id))
      return res.status(400).json({ msg: "Cannot accept empty parameters" });

    let risk = riskCalcModel(currentValue, loanAmount);
    const result = await Houses.update(
      { address, currentValue, loanAmount, risk },
      {
        where: { id },
        returning: true,
      }
    );

    res.status(200).json({
      success: true,
      msg: "The update was successful.",
      data: result[1][0],
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};
