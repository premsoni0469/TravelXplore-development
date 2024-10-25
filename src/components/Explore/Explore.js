import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Navbar from "../Home/Navbar/Navbar";
import Footer from "../Home/Footer/Footer";

function Explore() {
  useEffect(() => {
    document.title = "TravelXplore | Explore"; // Change the title
  }, []);

  const navigate = useNavigate();
  const handleBookNow = () => {
    navigate("/booking"); // Replace with the correct path to your booking page
  };

  // Example destinations data focusing on India
  const destinations = [
    // First page destinations
    {
      id: 1,
      title: "Taj Mahal",
      description: "Iconic mausoleum in Agra, a symbol of love.",
      imgSrc: "https://dummyimage.com/720x400",
      category: "WORLD HERITAGE SITE",
    },
    {
      id: 2,
      title: "Jaipur",
      description: "The Pink City known for its rich history and architecture.",
      imgSrc: "https://dummyimage.com/721x401",
      category: "CULTURAL HERITAGE",
    },
    {
      id: 3,
      title: "Varanasi",
      description:
        "The spiritual capital of India, located on the banks of the Ganges.",
      imgSrc: "https://dummyimage.com/722x402",
      category: "SPIRITUAL DESTINATION",
    },
    {
      id: 4,
      title: "Kerala Backwaters",
      description:
        "A network of lagoons and lakes offering serene houseboat experiences.",
      imgSrc: "https://dummyimage.com/723x403",
      category: "NATURAL BEAUTY",
    },
    {
      id: 5,
      title: "Goa",
      description: "Famous for its beautiful beaches and vibrant nightlife.",
      imgSrc: "https://dummyimage.com/724x404",
      category: "BEACH DESTINATION",
    },
    {
      id: 6,
      title: "Hampi",
      description:
        "A UNESCO World Heritage Site known for its ancient temples.",
      imgSrc: "https://dummyimage.com/725x405",
      category: "ARCHAEOLOGICAL SITE",
    },
    {
      id: 7,
      title: "Ranthambore National Park",
      description: "A wildlife sanctuary famous for its tiger population.",
      imgSrc: "https://dummyimage.com/726x406",
      category: "NATURAL RESERVE",
    },
    {
      id: 8,
      title: "Mysore Palace",
      description: "A historical palace known for its stunning architecture.",
      imgSrc: "https://dummyimage.com/727x407",
      category: "CULTURAL HERITAGE",
    },
    // Second page destinations (all from India)
    {
      id: 9,
      title: "Leh-Ladakh",
      description:
        "Known for its breathtaking landscapes and adventure activities.",
      imgSrc: "https://dummyimage.com/728x408",
      category: "ADVENTURE DESTINATION",
    },
    {
      id: 10,
      title: "Ajanta and Ellora Caves",
      description: "Famous rock-cut caves and UNESCO World Heritage Sites.",
      imgSrc: "https://dummyimage.com/729x409",
      category: "CULTURAL HERITAGE",
    },
    {
      id: 11,
      title: "Darjeeling",
      description:
        "Famous for its tea gardens and scenic views of the Himalayas.",
      imgSrc: "https://dummyimage.com/730x410",
      category: "NATURAL BEAUTY",
    },
    {
      id: 12,
      title: "Rishikesh",
      description:
        "Known as the Yoga Capital of the World, located on the banks of the Ganges.",
      imgSrc: "https://dummyimage.com/731x411",
      category: "SPIRITUAL DESTINATION",
    },
    {
      id: 13,
      title: "Udaipur",
      description:
        "The City of Lakes, known for its stunning palaces and hospitality.",
      imgSrc: "https://dummyimage.com/732x412",
      category: "ROMANTIC GETAWAY",
    },
    {
      id: 14,
      title: "Golden Temple",
      description: "The holiest Gurdwara in Sikhism, located in Amritsar.",
      imgSrc: "https://dummyimage.com/733x413",
      category: "SPIRITUAL DESTINATION",
    },
    {
      id: 15,
      title: "Konark Sun Temple",
      description:
        "A UNESCO World Heritage Site, famous for its architectural excellence.",
      imgSrc: "https://dummyimage.com/734x414",
      category: "CULTURAL HERITAGE",
    },
    {
      id: 16,
      title: "Nainital",
      description:
        "A picturesque hill station known for its lake and scenic views.",
      imgSrc: "https://dummyimage.com/735x415",
      category: "HILL STATION",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const destinationsPerPage = 8; // Number of items per page

  // Get current destinations for the current page
  const indexOfLastDestination = currentPage * destinationsPerPage;
  const indexOfFirstDestination = indexOfLastDestination - destinationsPerPage;
  const currentDestinations = destinations.slice(
    indexOfFirstDestination,
    indexOfLastDestination
  );

  // Pagination logic
  const totalPages = Math.ceil(destinations.length / destinationsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  // Helper to render pagination numbers with ellipsis
  const getPageNumbers = () => {
    const pageNumbers = [];
    if (totalPages <= 5) {
      // Show all pages if total pages <= 5
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Handle more than 5 pages
      if (currentPage <= 3) {
        pageNumbers.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage > totalPages - 3) {
        pageNumbers.push(
          1,
          "...",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pageNumbers.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }
    return pageNumbers;
  };

  return (
    <div>
      <Navbar />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-gray-900">
                Welcome to Explore!
              </h1>
              <div className="h-1 w-20 bg-blue-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              <h2 className="font-semibold text-black">
                Explore the Rich Heritage of India
              </h2>
              At TravelXplore, we bring you closer to the captivating
              destinations of India. Discover the diverse cultures, rich
              history, and breathtaking landscapes that make this country a
              traveler's paradise. From majestic palaces to serene backwaters,
              let us guide you on your next unforgettable journey through India.
            </p>
          </div>

          {/* Destinations List */}
          <div className="flex flex-wrap -m-4">
            {currentDestinations.map((destination) => (
              <div key={destination.id} className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src={destination.imgSrc}
                    alt={destination.title}
                  />
                  <h3 className="tracking-widest text-blue-700 text-xs font-medium title-font">
                    {destination.category}
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    {destination.title}
                  </h2>
                  <p className="leading-relaxed text-base">
                    {destination.description}
                  </p>
                  <button
                    onClick={handleBookNow}
                    className="inline-flex text-white bg-blue-500 border-0 py-1 px-4 mt-3 rounded focus:outline-none hover:bg-blue-700 transition-colors"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center mt-10">
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className={`mx-1 px-3 py-1 border rounded ${
                currentPage === 1 ? "bg-gray-100" : "bg-gray-100"
              } hover:bg-gray-200 transition-all duration-300`}
            >
              <svg
                className="w-6 h-6 text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            {getPageNumbers().map((number, index) =>
              number === "..." ? (
                <span key={index} className="mx-1 px-3 py-1">
                  {number}
                </span>
              ) : (
                <button
                  key={index}
                  onClick={() => handlePageChange(number)}
                  className={`mx-1 px-3 py-1 border rounded ${
                    currentPage === number
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 text-gray-600"
                  } hover:bg-gray-200 transition-all duration-300`}
                >
                  {number}
                </button>
              )
            )}
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`mx-1 px-3 py-1 border rounded ${
                currentPage === totalPages ? "bg-gray-100" : "bg-gray-100"
              } hover:bg-gray-200 transition-all duration-300`}
            >
              <svg
                className="w-6 h-6 text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Explore;
