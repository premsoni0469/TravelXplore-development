import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Services from './components/Services/Services';
import Explore from './components/Explore/Explore';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import ForgotPassword from './components/Home/ForgotPassword/ForgotPassword';
import BookingForm from './components/BookingPage/BookingForm';
import FlightBookingPage from './components/BookingPage/FlightBookingForm';
import RailwayBookingPage from './components/BookingPage/RailwayBookingForm';
import HotelBookingPage from './components/BookingPage/HotelBookingPage';
// import RailwayBooking from './components/BookingPage/RailwayBooking';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UserProfile from './components/UserProfile/UserProfile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/user-profile",
    element: <UserProfile />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "services",
    element: <Services />,
  },
  {
    path: "explore",
    element: <Explore />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/booking",
    element: <BookingForm />,
  },
  {
    path: "/flight-booking",
    element: <FlightBookingPage />,
  },
  {
    path: "/railway-booking",
    element: <RailwayBookingPage />,
  },
  {
    path: "/hotel-booking",
    element: <HotelBookingPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)