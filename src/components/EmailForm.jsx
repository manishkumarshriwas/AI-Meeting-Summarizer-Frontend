import React, { useEffect } from "react";

export default function EmailForm({
  subject,
  setSubject,
  recipients,
  setRecipients,
  message,
  setMessage,
  onSend,
  loading,
  prefillSummary,
}) {
  // Prefill the email message when summary changes
  useEffect(() => {
    if (prefillSummary) {
      setMessage(`${prefillSummary}\n\n`); // only prefill summary, keep message editable
    }
  }, [prefillSummary]);

  return (
    <div className="max-w-2xl mx-auto bg-gray-50 rounded-xl shadow-md p-6 sm:p-8 space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Share Summary via Email</h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2">
        <input
          type="email"
          value={recipients}
          onChange={(e) => setRecipients(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          placeholder="Recipient emails, comma separated"
        />

        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          placeholder="Email Subject"
        />
      </div>

      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        placeholder="Optional message"
      />

      <div className="text-center pt-4">
        <button
          onClick={onSend}
          disabled={loading}
          className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-primary-700 transition-all transform hover:scale-105 shadow-md flex items-center mx-auto"
        >
          <span className="material-symbols-outlined mr-2">send</span>
          {loading ? "Sending..." : "Send Email"}
        </button>
      </div>
    </div>
  );
}
