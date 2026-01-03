import { useEffect, useState } from "react";

interface Booking {
  _id: string;
  name: string;
  email: string;
  contactNumber: string;
  age: number;
  address: string;
  bookingDate: string;
}

const Home = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const fetchBookings = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/bookings");
      if (!response.ok) throw new Error("Failed to fetch bookings");

      const data = await response.json();
      console.log("Fetched data:", data);

      // Make sure bookings is an array
     setBookings(Array.isArray(data.data) ? data.data : []);

    } catch (error) {
      console.error("Error fetching bookings:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchBookings();
}, []);


 

  if (loading) return <p>Loading bookings...</p>;

  return (
    <div className="max-w-5xl mx-auto mt-8 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">All Bookings</h2>

      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 rounded-md overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border-b">User Id</th>
                <th className="px-4 py-2 border-b">Name</th>
                <th className="px-4 py-2 border-b">Email</th>
                <th className="px-4 py-2 border-b">Contact</th>
                <th className="px-4 py-2 border-b">Age</th>
                <th className="px-4 py-2 border-b">Address</th>
                <th className="px-4 py-2 border-b">Booking Date</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((b) => (
                <tr key={b._id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b">{b._id}</td>
                   <td className="px-4 py-2 border-b">{b.name}</td>
                  <td className="px-4 py-2 border-b">{b.email}</td>
                  <td className="px-4 py-2 border-b">{b.contactNumber}</td>
                  <td className="px-4 py-2 border-b">{b.age}</td>
                  <td className="px-4 py-2 border-b">{b.address}</td>
                  <td className="px-4 py-2 border-b">
  {new Date(b.bookingDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })}
</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Home;
