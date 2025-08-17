import React from "react";

export default function Hero() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Summarize Your Meetings{" "}
            <span className="text-primary-600">Instantly</span> with AI
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Upload your meeting transcript or paste the text. Get an AI-generated summary that you can edit and share instantly.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-primary-700 transition transform hover:scale-105 shadow-lg flex items-center gap-2">
            Get Started
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="AI Meeting Summarizer"
            className="w-full max-w-md rounded-lg shadow-xl transform hover:rotate-1 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
}
