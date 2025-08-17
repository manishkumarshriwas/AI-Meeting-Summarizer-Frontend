import React from "react";
import InstructionInput from "./InstructionInput";

export default function TranscriptInput({
  transcript,
  setTranscript,
  instruction,
  setInstruction,
  handleGenerateSummary,
  loading,
  handleFileUpload,
}) {
  return (
    <div className="flex flex-col gap-6 max-w-3xl mx-auto">
      {/* File Upload */}
      <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-primary-500 transition-all cursor-pointer">
        <input
          type="file"
          className="hidden"
          id="fileInput"
          onChange={handleFileUpload}
        />
        <label
          htmlFor="fileInput"
          className="flex flex-col items-center justify-center cursor-pointer"
        >
          <span className="material-symbols-outlined text-5xl text-gray-400 mb-2 animate-pulse">
            upload_file
          </span>
          <p className="text-gray-600">
            Drop your transcript file or{" "}
            <span className="text-primary-600 font-medium">browse</span>
          </p>
          <p className="text-xs text-gray-400 mt-2">Max file size: 5MB</p>
        </label>
      </div>

      {/* Transcript Textarea */}
      <textarea
        rows={10}
        value={transcript}
        onChange={(e) => setTranscript(e.target.value)}
        className="w-full rounded-lg border border-gray-300 shadow-sm p-4 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none"
        placeholder="Or paste your meeting transcript here..."
      />

      {/* Optional Instruction */}
      <InstructionInput instruction={instruction} setInstruction={setInstruction} />

      {/* Summarize Button */}
      <div className="text-center mt-4">
        <button
          onClick={handleGenerateSummary}
          disabled={loading || !transcript.trim()}
          className={`bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-primary-700 transition-all transform hover:scale-105 shadow-md ${
            loading || !transcript.trim() ? "" : ""
          }`}
        >
          {loading ? "Generating..." : "Summarize"}
        </button>
      </div>
    </div>
  );
}
