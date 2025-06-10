import { useRef } from "react";
import FeatureSection from "./FeatureSection";
import Navbar from "../component/Navbar";

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
     <Navbar onFeaturesClcick={handleFeaturesClick} />

     <div className="min-h-screen w-full bg-gradient-to-b from-white to-sky-50 text-gray-900 font-inter">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-28 text-center">
        <h1 className="text-6xl md:text-8xl font-extrabold leading-tight mb-8 tracking-tight text-gray-900">
          Unify Your Team with <span className="text-sky-600">ProjectFlow</span>
        </h1>
        <p className="text-2xl md:text-3xl text-gray-700 mb-12 max-w-3xl mx-auto">
          A powerful hub for real-time chat, task tracking, live documents, and productive collaboration.
        </p>
        <button className="text-2xl font-semibold px-12 py-6 rounded-full bg-black text-white shadow-2xl hover:scale-105 hover:shadow-3xl transition-all duration-300">
          🚀 Get Started 
        </button>
      </section>

      <FeatureSection featureRef = {featureRef} />

      {/* Additional sections like Feature Highlights, Testimonials, Pricing, Footer to be added */}
    </div>
    </>
  );
}
