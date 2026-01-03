

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      
      <section className="bg-blue-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About JustWravel</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Where Adventure meets Community | Wander | Travel | Connect | Repeat
        </p>
        <p className="mt-4 text-sm md:text-base">#wravelerforlife</p>
      </section>

      
      <section className="py-16 px-6 max-w-5xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold text-center">Our Journey</h2>
        <p className="text-gray-700 leading-relaxed">
          JustWravel, India’s most trusted and safest travel community, was established a decade ago with the mission of connecting travelers to their dream adventures. 
          Over the years, we have created a versatile travel community, serving the diverse needs of 80,000+ Wravelers and completing over 10,000 trips across 50+ destinations.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Our simple mantra: Don’t just travel — JustWravel. From weekend getaways, Himalayan treks, backpacking adventures, biking trips, international group tours, to corporate and school tours — we have curated experiences for every traveler.
        </p>
      </section>

      
      <section className="bg-white py-16 px-6 max-w-5xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold text-center">Why Choose JustWravel</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Certified Trip Leaders with BMC & AMC certifications and first-aid training.</li>
          <li>Free travel insurance for adventure activities up to ₹4.5 lakhs.</li>
          <li>Free riding jackets for biking trips and sustainable initiative: Keep The Trails Alive.</li>
          <li>Recognized by TripAdvisor, MSME, Startup India, IIM Bangalore NSRCEL, and state tourism boards.</li>
          <li>80,000+ happy travelers, 10,000+ reviews, 50+ destinations, and 9+ years of experience.</li>
        </ul>
      </section>

     
      <section className="py-16 px-6 max-w-5xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold text-center">What Our Travelers Say</h2>
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold mb-2">Rehna R Nambiar</h3>
            <p className="text-gray-700 text-sm">
              Our Spiti bike and backpacking trip was incredible, flawlessly organized, and well-managed. Huge appreciation to the organizers for handling such a large group so smoothly.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold mb-2">Khushboo Kumari</h3>
            <p className="text-gray-700 text-sm">
              Gear-up & Layer-up Trip to Leh Hanle Leh was amazing! The JustWravel team provided excellent planning, stay, food, and support throughout. Truly a great experience.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold mb-2">Sachin Sahu</h3>
            <p className="text-gray-700 text-sm">
              We booked a honeymoon Bali trip with JustWravel. Everything was accurate and smooth, thanks to Salman Raza and the team. The best trip of my life!
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold mb-2">Dr Ravish Singh</h3>
            <p className="text-gray-700 text-sm">
              Traveling solo to Ladakh was amazing. The team was friendly and cooperative, making the trip unforgettable. Truly recommendable.
            </p>
          </div>
        </div>
      </section>

   
      <section className="bg-blue-600 text-white py-16 px-6 text-center space-y-6">
        <h2 className="text-3xl font-bold">By the Numbers</h2>
        <div className="grid md:grid-cols-4 gap-6 mt-8">
          <div>
            <p className="text-4xl font-bold">10,000+</p>
            <p>Reviews</p>
          </div>
          <div>
            <p className="text-4xl font-bold">80,000+</p>
            <p>Satisfied Travelers</p>
          </div>
          <div>
            <p className="text-4xl font-bold">50+</p>
            <p>Destinations</p>
          </div>
          <div>
            <p className="text-4xl font-bold">9+</p>
            <p>Years of Experience</p>
          </div>
        </div>
      </section>

     
      <section className="py-16 px-6 max-w-3xl mx-auto text-center space-y-4">
        <h2 className="text-3xl font-bold">Ready for Your Next Adventure?</h2>
        <p className="text-gray-700">
          Join our community of Wravelers and explore amazing destinations with expert guidance, memorable experiences, and lifelong friends.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
          Book Your Trip Now
        </button>
      </section>

     
     
    </div>
  );
};

export default About;
