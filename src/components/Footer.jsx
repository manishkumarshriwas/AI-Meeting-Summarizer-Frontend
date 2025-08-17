import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 w-full mt-8 py-6 text-center text-sm text-gray-500">
      <p>&copy; {new Date().getFullYear()} AI Meeting Summarizer. All rights reserved.</p>
    </footer>
  );
}
