import React from "react";

export default function Header() {
  return (
    <div className="flex items-center justify-between mb-8">
      <h1 className="text-3xl font-bold text-gray-800">Meeting Notes Summarizer</h1>
      <div className="bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
        <span className="material-symbols-outlined mr-2">integration_instructions</span>
        Powered by Groq AI
      </div>
    </div>
  );
}
