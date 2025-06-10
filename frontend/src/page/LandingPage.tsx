import { useRef } from "react";
import FeatureSection from "./FeatureSection";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import WaterCursor from "../animation/WaterCursor";

export default function LandingPage() {

    const featureRef = useRef<HTMLDivElement>(null);

    const handleFeaturesClick = () => {
        featureRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

  return (
    <>
     <WaterCursor />
     <Navbar onFeaturesClcick={handleFeaturesClick} />

     <div className="min-h-full w-full bg-gradient-to-b from-slate-950 to-slate-900 text-white font-inter overflow-hidden">
      
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 py-28 text-center">
        <h1 className="text-4xl md:text-7xl font-extrabold leading-tight mb-8 tracking-tight text-white">
          Unify Your Team with <span className="text-sky-400">ProjectFlow</span>
        </h1>
        <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-3xl mx-auto">
          A powerful hub for real-time chat, task tracking, live documents, and productive collaboration.
        </p>
        <button className="text-2xl font-semibold px-12 py-6 rounded-full bg-sky-500 text-white shadow-2xl hover:scale-105 hover:shadow-3xl transition-all duration-300 hover:bg-sky-400">
          🚀 Get Started 
        </button>
      </section>

      <FeatureSection featureRef = {featureRef} />
      <Footer/>

    </div>
    </>
  );
}
