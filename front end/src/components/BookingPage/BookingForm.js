import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BookingForm = () => {
  const [persons, setPersons] = useState([
    { fullName: "", contactNumber: "", age: "", gender: "" },
  ]);
  const navigate = useNavigate();

  const handlePersonChange = (index, e) => {
    const updatedPersons = persons.map((person, i) =>
      i === index ? { ...person, [e.target.name]: e.target.value } : person
    );
    setPersons(updatedPersons);
  };

  const addPerson = () => {
    setPersons([
      ...persons,
      { fullName: "", contactNumber: "", age: "", gender: "" },
    ]);
  };

  const removePerson = (index) => {
    const updatedPersons = persons.filter((_, i) => i !== index);
    setPersons(updatedPersons);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="container mx-auto w-full max-w-4xl p-6 bg-white rounded-lg shadow-md">
        <h1 className="font-bold text-2xl text-center text-gray-800 mb-6">
          Booking Information
        </h1>
        <form>
          {persons.map((person, index) => (
            <div key={index} className="person-form mb-6 relative">
              <h2 className="text-center font-bold text-lg mb-4">
                Person {index + 1}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-group">
                  <label className="block font-medium mb-1">Full Name:</label>
                  <input
                    type="text"
                    name="fullName"
                    value={person.fullName}
                    onChange={(e) => handlePersonChange(index, e)}
                    className="w-full border-2 border-gray-300 p-2 rounded"
                    placeholder="First-Name Middle-Name Last-Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="block font-medium mb-1">Contact Number:</label>
                  <input
                    type="text"
                    name="contactNumber"
                    value={person.contactNumber}
                    onChange={(e) => handlePersonChange(index, e)}
                    className="w-full border-2 border-gray-300 p-2 rounded"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="block font-medium mb-1">Age:</label>
                  <input
                    type="number"
                    name="age"
                    value={person.age}
                    onChange={(e) => handlePersonChange(index, e)}
                    className="w-full border-2 border-gray-300 p-2 rounded"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="block font-medium mb-1">Gender:</label>
                  <select
                    name="gender"
                    value={person.gender}
                    onChange={(e) => handlePersonChange(index, e)}
                    className="w-full border-2 border-gray-300 p-2 rounded"
                    required
                  >
                    <option value="">Not Selected</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              {/* Render the remove button only for persons beyond the first one */}
              {index > 0 && (
                <button
                  type="button"
                  className="absolute top-5 right-5 -mt-6 mr-4 px-4 py-2 border-2 border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white transition duration-300"
                  onClick={() => removePerson(index)}
                >
                  Remove Person
                </button>
              )}
              <hr className="my-4 mt-3" />
            </div>
          ))}
          <button
            type="button"
            className="block w-full md:w-auto px-4 py-2 mt-4 mb-4 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition duration-300"
            onClick={addPerson}
          >
            Add Person
          </button>
          <div className="action-buttons text-center mt-6">
            <button
              type="button"
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 mx-2 transition duration-300"
              onClick={() => navigate("/flight-booking")}
            >
              Flight Booking
            </button>
            <button
              type="button"
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-green-700 mx-2 transition duration-300"
              onClick={() => navigate("/railway-booking")}
            >
              Railway Booking
            </button>
            <button
              type="button"
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-green-700 mx-2 transition duration-300"
              onClick={() => navigate("/hotel-booking")}
            >
              Hotel Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
