import { useState } from "react";

interface BookingFormData {
  name: string;
  email: string;
  contactNumber: string;
  age: number | "";
  address: string;
  bookingDate: string;
}

const BookingForm = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: "",
    email: "",
    contactNumber: "",
    age: "",
    address: "",
    bookingDate: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "age" ? (value === "" ? "" : Number(value)) : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/bookings/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error("Validation error:", data);
        return;
      }

      console.log("Booking created:", data);
      alert("Booking successful!");

      // Reset form
      setFormData({
        name: "",
        email: "",
        contactNumber: "",
        age: "",
        address: "",
        bookingDate: "",
      });
    } catch (error) {
      console.error("Server error:", error);
    }
  };

  return (
    <div className="py-4">
       <h1 className="text-3xl font-bold text-center mb-6">Book Your Slot</h1>
      <form
        className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md space-y-4"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="name"
          placeholder="Enter your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="contactNumber"
          placeholder="Contact Number"
          value={formData.contactNumber}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          rows={3}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="date"
          name="bookingDate"
          value={formData.bookingDate}
          onChange={handleChange} 
          min={new Date().toISOString().split("T")[0]}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full bg-indigo-400 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
