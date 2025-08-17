import React from "react";

export default function InstructionInput({ instruction, setInstruction }) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="block text-sm font-medium text-gray-700">
        Custom Instruction (Optional)
      </label>
      <input
        type="text"
        value={instruction}
        onChange={(e) => setInstruction(e.target.value)}
        className="w-full rounded-lg border border-gray-300 shadow-sm p-3 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        placeholder="E.g., 'Bullet points for executives' or 'Focus on action items'"
      />
    </div>
  );
}
