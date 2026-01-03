import mongoose from "mongoose";

const bookingSchema=  new mongoose.Schema(
    {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    

    email: {
      type: String,
      required: true,
      match: /.+\@.+\..+/,
    },

    contactNumber: {
      type: String,
      required: true,
      match: /^[6-9]\d{9}$/, 
    },

    age: {
      type: Number,
      required: true,
      min: 18,
      max: 100,
    },

    address: {
      type: String,
      required: true,
      trim: true,
    },

    bookingDate: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
)


export default  mongoose.model("Booking",bookingSchema)