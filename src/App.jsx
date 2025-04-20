import React from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import AuctionsSection from "./components/Auctions/AuctionsSection";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <AuctionsSection />
      <ToastContainer autoClose="2000" />
      <Footer></Footer>
    </>
  );
}

export default App;
