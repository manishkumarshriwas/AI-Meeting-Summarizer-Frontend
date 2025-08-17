import React from "react";
import jsPDF from "jspdf";

export default function SummaryEditor({ summary, setSummary, loading, onSendEmailClick }) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(summary);
    alert("Summary copied to clipboard!");
  };

  const downloadPDF = () => {
    if (!summary.trim()) return;
    const doc = new jsPDF();
    const lines = doc.splitTextToSize(summary, 180);
    doc.text(lines, 10, 10);
    doc.save("meeting_summary.pdf");
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 transition-all hover:shadow-xl space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
        <h3 className="text-xl font-semibold text-gray-700">Meeting Summary</h3>
        <div className="text-sm text-gray-500">
          {loading ? "Generating..." : summary ? `Generated on ${new Date().toLocaleDateString()}` : ""}
        </div>
      </div>

      {/* Summary Textarea */}
      <textarea
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
        className="w-full min-h-[200px] p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all resize-none"
        placeholder="AI-generated summary will appear here..."
      />

      {/* Actions: Copy / Download / Send Email */}
      <div className="flex justify-center gap-4 flex-wrap">
        <button
          onClick={copyToClipboard}
          disabled={!summary.trim()}
          className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-all flex items-center group "
        >
          <span className="material-symbols-outlined mr-2 group-hover:text-primary-600">content_copy</span>
          Copy
        </button>

        <button
          onClick={downloadPDF}
          disabled={!summary.trim()}
          className="bg-white border border-gray-300 text-black-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-all flex items-center group "
        >
          <span className="material-symbols-outlined mr-2 group-hover:text-primary-600">download</span>
          Download PDF
        </button>

        <button
          onClick={() => onSendEmailClick(summary)}
          disabled={!summary.trim()}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all flex items-center"
        >
          <span className="material-symbols-outlined mr-2">send</span>
          Send Email
        </button>
      </div>
    </div>
  );
}
