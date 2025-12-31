import { useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "../components/ui/Button";
import "../components/ui/Card.css";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "idle", text: "" });
  const [loading, setLoading] = useState(false);

  function onChange(e) {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  }

  function getTimeStamp() {
    return new Date().toLocaleString("en-CA", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    setStatus({ type: "idle", text: "" });

    if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
      setStatus({ type: "error", text: "Please fill in all fields." });
      return;
    }

    setLoading(true);

    try {
      const templateParams = {
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
        time: getTimeStamp(),
      };

      await emailjs.send(
        "service_dfhlfwm",
        "template_mhv1axa",
        templateParams,
        "f1Fn0FQDiHyJYdsFR"
      );

      setStatus({ type: "success", text: "Message sent successfully. Thanks for reaching out!" });
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus({
        type: "error",
        text: "Something went wrong. Please try again or email me directly to nicoazuero@gmail.com.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="contact">
      <header className="contact__header">
        <h1>Get In Contact</h1>

        <div className="contact__socials">
          <Button
            label="LinkedIn"
            href="https://www.linkedin.com/in/matthew-azuero-guijarro-473669290"
          />
          <Button label="GitHub" href="https://github.com/nicoazueroo" />
          <Button label="Email" href="mailto:nicoazuero@gmail.com" />
        </div>
      </header>

      <section className="contact__content">
        <div className="card contact__card">
          <h2 className="contact__formTitle">Send a message</h2>
          <div className="contact__divider" />

          <form className="contact__form" onSubmit={onSubmit}>
            <label className="contact__label">
              Name
              <input
                className="contact__input"
                name="name"
                value={form.name}
                onChange={onChange}
                placeholder="Your name"
                autoComplete="name"
              />
            </label>

            <label className="contact__label">
              Email
              <input
                className="contact__input"
                name="email"
                value={form.email}
                onChange={onChange}
                placeholder="your@email.com"
                autoComplete="email"
              />
            </label>

            <label className="contact__label">
              Subject
              <input
                className="contact__input"
                name="subject"
                value={form.subject}
                onChange={onChange}
                placeholder="What is this about?"
              />
            </label>

            <label className="contact__label">
              Message
              <textarea
                className="contact__textarea"
                name="message"
                value={form.message}
                onChange={onChange}
                placeholder="Tell me about your project..."
                rows={7}
              />
            </label>

            <button type="submit" className="contact__sendBtn" disabled={loading}>
              {loading ? "SENDING..." : "SEND MESSAGE"}{" "}
              <span className="contact__sendIcon">↗</span>
            </button>

            {status.type !== "idle" && (
              <p className={`contact__status contact__status--${status.type}`}>
                {status.text}
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}
