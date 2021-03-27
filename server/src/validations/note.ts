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

export const putNoteValidation = [
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
data: [
  {
    description: "",
  },
];
export const postSyncNoteValidation = [
  body("data.*._id").notEmpty().withMessage("id is required"),
  body("data.*.description")
    .notEmpty()
    .withMessage("description is required")
    .isString()
    .withMessage("description should be string"),
  body("data.*.category")
    .custom((input) => ["income", "expense"].includes(input))
    .withMessage("category sould be income or expense"),
  body("data.*.date").notEmpty().withMessage("date is required").toDate(),
  body("data.*.nominal").notEmpty().withMessage("nominal is required").toInt(),
  body("data.*.status")
    .custom((input) => ["insert", "update", "delete"].includes(input))
    .withMessage("status should be insert, update, or delete"),
];
