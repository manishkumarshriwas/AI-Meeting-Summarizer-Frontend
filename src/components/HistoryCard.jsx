import React from "react";

export default function HistoryCard() {
  const pastSummaries = [
    {
      id: 1,
      title: "Marketing Strategy Meeting",
      date: "June 8, 2023",
      snippet:
        "The team discussed the Q2 marketing strategy with focus on expanding digital channels...",
    },
    {
      id: 2,
      title: "Product Planning Meeting",
      date: "June 5, 2023",
      snippet:
        "Discussed roadmap for new features and upcoming releases for Q3...",
    },
    {
      id: 3,
      title: "Client Kickoff",
      date: "June 1, 2023",
      snippet: "Introduced project goals and deliverables to client team...",
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Past Summaries</h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Access your previously generated meeting summaries and share them again
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pastSummaries.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md p-6 transform transition-all hover:shadow-lg hover:-translate-y-1"
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold text-lg text-gray-800">{item.title}</h3>
              <span className="text-sm text-gray-500">{item.date}</span>
            </div>
            <p className="text-gray-600 mb-4 line-clamp-3">{item.snippet}</p>
            <div className="flex justify-between">
              <button className="text-primary-600 hover:text-primary-800 flex items-center text-sm">
                <span className="material-symbols-outlined mr-1">visibility</span>View
              </button>
              <button className="text-gray-600 hover:text-gray-800 flex items-center text-sm">
                <span className="material-symbols-outlined mr-1">edit</span>Edit
              </button>
              <button className="text-gray-600 hover:text-gray-800 flex items-center text-sm">
                <span className="material-symbols-outlined mr-1">share</span>Share
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-50 transition-all flex items-center mx-auto">
          <span>View All Summaries</span>
          <span className="material-symbols-outlined ml-2">arrow_forward</span>
        </button>
      </div>
    </div>
  );
}
