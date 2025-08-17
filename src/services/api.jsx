const API_URL = "http://localhost:5001/api";

/**
 * Generate AI Summary
 * @param {string} transcript - The transcript text
 * @param {string} instruction - Optional instruction for summary
 * @returns {Promise<{summary: string}>}
 */
export const generateSummary = async (transcript, instruction = "") => {
  try {
    const response = await fetch(`${API_URL}/generate-summary`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ transcript, instruction }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Failed to generate summary");
    }

    return response.json();
  } catch (err) {
    console.error("Error in generateSummary:", err);
    throw err;
  }
};

/**
 * Send Email
 * @param {string} recipients - Comma-separated emails
 * @param {string} subject - Email subject
 * @param {string} summary - Email body
 * @returns {Promise<{message: string}>}
 */
export const sendEmail = async (recipients, subject, summary) => {
  try {
    const response = await fetch(`${API_URL}/send-email`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ recipients, subject, summary }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Failed to send email");
    }

    return response.json();
  } catch (err) {
    console.error("Error in sendEmail:", err);
    throw err;
  }
};
