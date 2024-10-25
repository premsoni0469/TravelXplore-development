// src/RailwayBookingPage.js
import React, { useState } from "react";

const RailwayBookingPage = () => {
  const [availableTrains, setAvailableTrains] = useState([]);
  const [bookingDetails, setBookingDetails] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedClass, setSelectedClass] = useState("Sleeper");

  // Pricing multipliers based on class
  const classPricing = {
    Sleeper: 1,
    "AC 3 Tier": 1.5,
    "AC 2 Tier": 2,
    "AC First Class": 3,
  };

  // Dummy train data
  const trainsData = [
    {
      id: 1,
      trainName: "Rajdhani Express",
      trainNumber: "12345",
      from: "New Delhi",
      to: "Mumbai",
      departure: "16:55",
      arrival: "08:35",
      basePrice: 2500,
      duration: "15h 40m",
      stoppage: "Non-stop",
    },
    {
      id: 2,
      trainName: "Shatabdi Express",
      trainNumber: "12010",
      from: "New Delhi",
      to: "Amritsar",
      departure: "07:20",
      arrival: "13:30",
      basePrice: 1500,
      duration: "6h 10m",
      stoppage: "Non-stop",
    },
    {
      id: 3,
      trainName: "Duronto Express",
      trainNumber: "22222",
      from: "New Delhi",
      to: "Kolkata",
      departure: "20:00",
      arrival: "12:15",
      basePrice: 3000,
      duration: "16h 15m",
      stoppage: "Non-stop",
    },
  ];

  const handleSearchTrains = (e) => {
    e.preventDefault();
    setAvailableTrains(trainsData);
  };

  const handleBookTrain = (train) => {
    const classMultiplier = classPricing[selectedClass];
    const finalPrice = train.basePrice * classMultiplier;
    setBookingDetails({ ...train, finalPrice });
    setTotalPrice(finalPrice);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8 flex items-center justify-center">
      {/* Railway Booking Form */}
      <div className="railway-info-form bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-4">Book Your Train Ticket</h2>

        {/* Form for booking train */}
        <form onSubmit={handleSearchTrains} className="space-y-4">
          <div className="form-group">
            <label
              htmlFor="from"
              className="block text-sm font-medium text-gray-700"
            >
              From
            </label>
            <input
              type="text"
              id="from"
              name="from"
              placeholder="Enter departure city"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="form-group">
            <label
              htmlFor="destination"
              className="block text-sm font-medium text-gray-700"
            >
              To
            </label>
            <input
              type="text"
              id="destination"
              name="destination"
              placeholder="Enter destination city"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="form-group">
            <label
              htmlFor="departure-date"
              className="block text-sm font-medium text-gray-700"
            >
              Departure Date
            </label>
            <input
              type="date"
              id="departure-date"
              name="departure-date"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="form-group">
            <label
              htmlFor="return-date"
              className="block text-sm font-medium text-gray-700"
            >
              Return Date (Optional)
            </label>
            <input
              type="date"
              id="return-date"
              name="return-date"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="form-group">
            <label
              htmlFor="class"
              className="block text-sm font-medium text-gray-700"
            >
              Class
            </label>
            <select
              id="class"
              name="class"
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            >
              <option value="Sleeper">Sleeper</option>
              <option value="AC 3 Tier">AC 3 Tier</option>
              <option value="AC 2 Tier">AC 2 Tier</option>
              <option value="AC First Class">AC First Class</option>
            </select>
          </div>

          <button
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            type="submit"
          >
            Search Trains
          </button>
        </form>
      </div>

      {/* Display available trains after search */}
      {/* Display available trains after search */}
      {availableTrains.length > 0 && (
        <div className="available-trains space-y-4 w-full max-w-2xl ml-4">
          {" "}
          {/* Added ml-4 for left margin */}
          <h3 className="text-xl font-bold mb-4">Available Trains</h3>
          {availableTrains.map((train) => (
            <div
              key={train.id}
              className="train-card bg-white p-4 rounded-lg shadow-md flex justify-between items-center"
            >
              <div className="train-info">
                <div className="train-details mb-2">
                  <span className="font-bold">{train.trainName}</span>
                  <span className="text-gray-600 ml-2">
                    {train.trainNumber}
                  </span>
                </div>
                <div className="train-schedule mb-2">
                  <span className="block">
                    From: {train.from} - {train.departure}
                  </span>
                  <span className="block">
                    To: {train.to} - {train.arrival}
                  </span>
                </div>
                <div className="train-duration mb-2">
                  <span className="block">Duration: {train.duration}</span>
                  <span className="block">Stoppage: {train.stoppage}</span>
                </div>
              </div>
              <div className="price-actions text-right">
                <span className="block font-semibold">
                  ₹{(train.basePrice * classPricing[selectedClass]).toFixed(2)}
                </span>
                <span className="block text-sm text-gray-500">
                  per person ({selectedClass})
                </span>
                <button
                  className="mt-2 bg-green-500 text-white py-1 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                  onClick={() => handleBookTrain(train)}
                >
                  Book
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Show total price after booking */}
      {bookingDetails && (
        <div className="booking-summary mt-8 bg-white p-6 rounded-lg shadow-md w-full max-w-2xl ml-4">
          <h3 className="text-xl text-center font-semibold mb-4">Booking Summary</h3>
          <p>
            <b>Train:</b> {bookingDetails.trainName} - {bookingDetails.trainNumber}
          </p>
          <p><b>From:</b> {bookingDetails.from}</p>
          <p><b>To:</b> {bookingDetails.to}</p>
          <p>
            <b>Total Price:</b> ₹{totalPrice.toFixed(2)} ({selectedClass})
          </p>
          <button
                  className="mt-2 bg-green-500 text-white py-1 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                >
                  Go for payment
                </button>
        </div>
      )}
    </div>
  );
};

export default RailwayBookingPage;
