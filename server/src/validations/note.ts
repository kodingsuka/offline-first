import { body } from "express-validator";

export const postNoteValidation = [
  body("description")
    .notEmpty()
    .withMessage("description is required")
    .isString()
    .withMessage("description should be string"),
  body("category")
    .custom((input) => ["income", "expense"].includes(input))
    .withMessage("category sould be income or expense"),
  body("date").notEmpty().withMessage("date is required").toDate(),
  body("nominal").notEmpty().withMessage("nominal is required").toInt(),
];
