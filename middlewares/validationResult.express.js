import { validationResult } from "express-validator";

export const validationResultExpress = (req, res, next) => {
  const errors = validationResult(req); // aqui intercepta lo que esta ingregando el usuario, el body
  console.log(req.body);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array() });
  }
  next();
};
