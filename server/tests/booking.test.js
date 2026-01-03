import dotenv from "dotenv";
dotenv.config();

import request from "supertest";
import mongoose from "mongoose";
import app from "../src/app.js";
import Booking from "../src/models/Booking.js";


describe("Booking API Tests", () => {

  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI);
  });

  afterEach(async () => {
    await Booking.deleteMany(); 
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  describe("POST /api/bookings", () => {

    it("should create a booking successfully", async () => {
      const bookingData = {
        name: "Anmol",
        email: "anmol@gmail.com",
        contactNumber: "9876543210",
        age: 25,
        address: "Prayagraj, UP",
        bookingDate: "2026-01-15"
      };

      const res = await request(app)
        .post("/api/bookings")
        .send(bookingData);

      expect(res.statusCode).toBe(201);
      expect(res.body.success).toBe(true);
      expect(res.body.data.name).toBe("Anmol");
      expect(res.body.data.email).toBe("anmol@gmail.com");
    });

  });

  describe("GET /api/bookings", () => {

    it("should return all bookings", async () => {
    ``
      await Booking.create({
        name: "Test User",
        email: "test@gmail.com",
        contactNumber: "9999999999",
        age: 30,
        address: "Delhi",
        bookingDate: "2026-02-01"
      });

      const res = await request(app).get("/api/bookings");

      expect(res.statusCode).toBe(200);
      expect(res.body.success).toBe(true);
      expect(Array.isArray(res.body.data)).toBe(true);
      expect(res.body.data.length).toBe(1);
    });

  });

});
