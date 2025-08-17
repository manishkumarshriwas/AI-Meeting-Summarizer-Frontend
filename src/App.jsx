import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TranscriptInput from "./components/TranscriptInput";
import SummaryEditor from "./components/SummaryEditor";
import EmailForm from "./components/EmailForm";
import HistoryCard from "./components/HistoryCard";
import Footer from "./components/Footer";

export default function App() {
  const [transcript, setTranscript] = useState("");
  const [instruction, setInstruction] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const [emailSubject, setEmailSubject] = useState("Meeting Summary");
  const [emailRecipients, setEmailRecipients] = useState("");
  const [emailMessage, setEmailMessage] = useState(
    "Hi,\n\nHere's the summary from our recent meeting.\n\nBest regards,"
  );

  // New state to prefill summary in EmailForm
  const [emailPrefill, setEmailPrefill] = useState("");

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (evt) => setTranscript(evt.target.result);
    reader.readAsText(file);
  };

  const handleGenerateSummary = async () => {
    if (!transcript.trim()) return alert("Please enter a transcript first!");
    setLoading(true);
    setSummary("");

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/generate-summary`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ transcript, instruction }),
      });
      const data = await res.json();

      // Word-by-word animation
      const words = data.summary.split(" ");
      let index = 0;
      const interval = setInterval(() => {
        setSummary((prev) => prev + (index > 0 ? " " : "") + words[index]);
        index++;
        if (index >= words.length) clearInterval(interval);
      }, 50);

    } catch (err) {
      console.error(err);
      setSummary("Error generating summary");
    }
    setLoading(false);
  };

  const handleSendEmail = async () => {
    if (!emailMessage || !emailRecipients || !emailSubject) return alert("Fill all fields!");
    try {
      setLoading(true);
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          recipients: emailRecipients,
          subject: emailSubject,
          summary: emailMessage,
        }),
      });
      const data = await res.json();
      alert(data.message || "Email sent!");
    } catch (err) {
      console.error(err);
      alert("Error sending email");
    }
    setLoading(false);
  };

  const handleSendEmailClick = (summaryText) => {
    setEmailPrefill(summaryText); // prefill summary in EmailForm
    window.scrollTo({
      top: document.getElementById("emailForm").offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <Hero />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl space-y-4">
          <TranscriptInput
            transcript={transcript}
            setTranscript={setTranscript}
            instruction={instruction}
            setInstruction={setInstruction}
            handleGenerateSummary={handleGenerateSummary}
            loading={loading}
            handleFileUpload={handleFileUpload}
          />
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <SummaryEditor
            summary={summary}
            setSummary={setSummary}
            loading={loading}
            onSendEmailClick={handleSendEmailClick} // Pass summary to email form
          />
        </div>
      </section>

      <section id="emailForm" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <EmailForm
            subject={emailSubject}
            setSubject={setEmailSubject}
            recipients={emailRecipients}
            setRecipients={setEmailRecipients}
            message={emailMessage}
            setMessage={setEmailMessage}
            onSend={handleSendEmail}
            loading={loading}
            prefillSummary={emailPrefill} // prefill summary content
          />
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <HistoryCard />
        </div>
      </section>

      <Footer />
    </div>
  );
}
