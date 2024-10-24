import React, { useState } from 'react';

const FlightBookingPage = () => {
  const [availableFlights, setAvailableFlights] = useState([]);
  const [bookingDetails, setBookingDetails] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedFlightClass, setSelectedFlightClass] = useState('Economy');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const cityDistances = {
    'New Delhi-Bengaluru': 1740,
    'New Delhi-Mumbai': 1400,
    'Mumbai-Bengaluru': 980,
    'Chennai-Kolkata': 1670,
  };

  const flightSpeed = 900;

  const classMultipliers = {
    Economy: { price: 1, time: 1 },
    'Premium Economy': { price: 1.2, time: 0.95 },
    Business: { price: 1.5, time: 0.9 },
    'First Class': { price: 2, time: 0.85 },
  };

  const handleSearchFlights = (e) => {
    e.preventDefault();
    const cityKey = `${from}-${to}`;
    const distance = cityDistances[cityKey] || 0;
    const baseDuration = distance > 0 ? (distance / flightSpeed).toFixed(2) : 0;
    const classMultiplier = classMultipliers[selectedFlightClass].time;
    const finalDuration = (baseDuration * classMultiplier).toFixed(2);

    const flightsData = [
      {
        id: 1,
        airline: 'Akasa Air',
        flightNumber: 'QP 1350',
        from: from,
        to: to,
        departure: '22:40',
        arrival: '01:25',
        price: 6702,
        duration: `${finalDuration}h`,
        stoppage: 'Non-stop',
        distance: distance,
      },
    ];

    const flightsDataWithPriceMultiplier = flightsData.map((flight) => {
      const classPriceMultiplier = classMultipliers[selectedFlightClass].price;
      const finalPrice = (flight.price * classPriceMultiplier).toFixed(2);
      return { ...flight, price: finalPrice };
    });

    setAvailableFlights(flightsDataWithPriceMultiplier);
  };

  const handleBookFlight = (flight) => {
    setBookingDetails(flight);
    setTotalPrice(flight.price);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
        <p className="text-2xl text-center text-black font-bold mb-4">Book Your Flight</p>
        <form onSubmit={handleSearchFlights}>
          <div className="mb-4">
            <label htmlFor="from" className="block font-medium mb-1">
              From
            </label>
            <input
              type="text"
              id="from"
              name="from"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              placeholder="Enter departure city"
              className="w-full border-gray-300 border-2 p-2 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="destination" className="block font-medium mb-1">
              To
            </label>
            <input
              type="text"
              id="destination"
              name="destination"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              placeholder="Enter destination city"
              className="w-full border-gray-300 border-2 p-2 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="departure-date" className="block font-medium mb-1">
              Departure Date
            </label>
            <input
              type="date"
              id="departure-date"
              name="departure-date"
              className="w-full border-gray-300 border-2 p-2 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="return-date" className="block font-medium mb-1">
              Return Date
            </label>
            <input
              type="date"
              id="return-date"
              name="return-date"
              className="w-full border-gray-300 border-2 p-2 rounded"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="flightClass" className="block font-medium mb-1">
              Flight Class
            </label>
            <select
              id="flightClass"
              name="flightClass"
              value={selectedFlightClass}
              onChange={(e) => setSelectedFlightClass(e.target.value)}
              className="border-gray-300 border-2 p-2 rounded"
              required
            >
              <option value="Economy">Economy</option>
              <option value="Premium Economy">Premium Economy</option>
              <option value="Business">Business</option>
              <option value="First Class">First Class</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Search Flights
          </button>
        </form>
      </div>

      {availableFlights.length > 0 && (
        <div className="max-w-2xl mx-auto mt-8">
          <h3 className="text-xl font-semibold mb-4">Available Flights</h3>
          {availableFlights.map((flight) => (
            <div key={flight.id} className="bg-white p-4 mb-4 rounded shadow">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <img
                    src={`https://a.storyblok.com/f/159922/3000x1688/0474ce970b/akasa-air.jpg`}
                    alt={flight.airline}
                    className="h-24 w-48 rounded"
                  />
                </div>
                <div>
                  <p className="font-semibold">{flight.airline}</p>
                  <p className="text-sm">{flight.flightNumber}</p>
                </div>
              </div>
              <div className="flex justify-between mb-4">
                <div>
                  <p className="font-medium">From: {flight.from}</p>
                  <p className="font-medium">To: {flight.to}</p>
                </div>
                <div>
                  <p className="font-medium">Distance: {flight.distance} km</p>
                  <p className="font-medium">Duration: {flight.duration}</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-lg font-semibold">₹{flight.price}</div>
                <button
                  onClick={() => handleBookFlight(flight)}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  Book
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {bookingDetails && (
        <div className="max-w-lg mx-auto mt-8 bg-white p-4 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Booking Summary</h3>
          <p>Flight: {bookingDetails.airline} - {bookingDetails.flightNumber}</p>
          <p>From: {bookingDetails.from}</p>
          <p>To: {bookingDetails.to}</p>
          <p>Distance Covered: {bookingDetails.distance} km</p>
          <p className="font-bold">Total Price: ₹{totalPrice}</p>
        </div>
      )}
    </div>
  );
};

export default FlightBookingPage;
