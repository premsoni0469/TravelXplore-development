import React from 'react';

const HotelPage = () => {
  // Sample data based on the dataset from the Goibibo link
  const hotelData = {
    name: "Oxford Hotel",
    location: "Mumbai, Maharashtra, India",
    checkInDate: "2024-10-22",
    checkOutDate: "2024-10-23",
    guests: "2 Adults",
    rating: 3.5,
    reviewCount: 120,
    address: "Near Airport Road Metro Station, Mumbai, Maharashtra",
    description: "Oxford Hotel is located near the airport road metro station, providing easy access to key locations in Mumbai. Standard check-in is 12:00 PM, and check-out is at 12:00 PM. Early check-in or late check-out is subject to availability.",
    amenities: [
      "Free WiFi",
      "Room Service",
      "Restaurant",
      "Laundry Service",
      "Parking Facility",
      "24-hour Front Desk",
      "Air Conditioning",
      "Gym Facility"
    ],
    roomTypes: [
      { type: "Standard Room", price: 3000, image: "https://via.placeholder.com/400" },
      { type: "Deluxe Room", price: 4500, image: "https://via.placeholder.com/400" },
      { type: "Suite", price: 6000, image: "https://via.placeholder.com/400" }
    ],
    hotelImage: "https://via.placeholder.com/800x400", // Placeholder image URL
    similarHotels: [
      { name: "Hotel A", url: "#", image: "https://via.placeholder.com/200" },
      { name: "Hotel B", url: "#", image: "https://via.placeholder.com/200" },
      { name: "Hotel C", url: "#", image: "https://via.placeholder.com/200" }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Hotel Image */}
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <img src="https://res.cloudinary.com/simplotel/image/upload/w_5000,h_3333/x_0,y_260,w_5000,h_2813,r_0,c_crop,q_80,fl_progressive/w_500,f_auto,c_fit/the-manali-inn-hotel/Junior_Suite_at_The_Manali_Inn_Hotel" alt="Hotel" className="w-full h-80 object-cover" />

        {/* Hotel Details */}
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-2">{hotelData.name}</h1>
          <p className="text-gray-600 mb-2">{hotelData.location}</p>
          <p className="text-gray-500 mb-4">{hotelData.address}</p>
          <p className="text-gray-800 mb-4">{hotelData.description}</p>
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold">Rating: {hotelData.rating} / 5</span>
            <span className="text-sm text-gray-500">{hotelData.reviewCount} Reviews</span>
          </div>

          {/* Amenities */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Amenities</h2>
            <ul className="grid grid-cols-2 gap-2 text-gray-700">
              {hotelData.amenities.map((amenity, index) => (
                <li key={index} className="flex items-center">
                  <span className="mr-2">✓</span>
                  {amenity}
                </li>
              ))}
            </ul>
          </div>

          {/* Room Selection */}
          <div className="border-t border-b py-4 my-6">
            <h2 className="text-xl font-semibold mb-4">Available Rooms</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {hotelData.roomTypes.map((room, index) => (
                <div key={index} className="border rounded-lg p-4 shadow-sm">
                  <img src="https://res.cloudinary.com/simplotel/image/upload/w_5000,h_3333/x_0,y_260,w_5000,h_2813,r_0,c_crop,q_80,fl_progressive/w_500,f_auto,c_fit/the-manali-inn-hotel/Junior_Suite_at_The_Manali_Inn_Hotel" alt={room.type} className="h-40 w-full object-cover mb-4" />
                  <h3 className="text-lg font-bold mb-2">{room.type}</h3>
                  <p className="text-gray-600 mb-2">Price: ₹{room.price}</p>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
                    Book Now
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Section */}
          <div className="mt-6 text-center">
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg mr-4">
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>

      {/* Similar Hotels */}
      <div className="max-w-5xl mx-auto mt-12">
        <h2 className="text-2xl font-semibold mb-4">Similar Hotels</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {hotelData.similarHotels.map((hotel, index) => (
            <a href={hotel.url} key={index} className="block bg-white shadow-md rounded-lg overflow-hidden">
              <img src="https://res.cloudinary.com/simplotel/image/upload/w_5000,h_3333/x_0,y_260,w_5000,h_2813,r_0,c_crop,q_80,fl_progressive/w_500,f_auto,c_fit/the-manali-inn-hotel/Junior_Suite_at_The_Manali_Inn_Hotel" alt={hotel.name} className="h-40 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold">{hotel.name}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelPage;
