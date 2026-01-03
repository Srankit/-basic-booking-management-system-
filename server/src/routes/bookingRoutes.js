import express from "express";
import { body, validationResult } from "express-validator";
import { createBooking, getAllBookings } from "../controller/bookingController.js";

const router = express.Router();

const bookingValidation = [
  body("name").notEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("Valid email required"),
  body("contactNumber")
    .matches(/^[6-9]\d{9}$/)
    .withMessage("Valid contact number required"),
  body("age").isInt({ min: 18, max: 100 }).withMessage("Valid age required"),
  body("address").notEmpty().withMessage("Address is required"),
  body("bookingDate").notEmpty().withMessage("Booking date is required"),
];

router.post("/", bookingValidation, (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
}, createBooking);

router.get("/", getAllBookings);

export default router;
