import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // mock submit (no backend needed for portfolio)
    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 py-14">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
        <p className="mt-3 text-gray-500">
          Have questions? We’d love to hear from you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              Get in touch
            </h2>
            <p className="text-gray-600 mt-2">
              Feel free to reach out for any support or inquiries.
            </p>
          </div>

          <div className="space-y-3 text-gray-600">
            <p>📧 support@store.com</p>
            <p>📞 +91 98765 43210</p>
            <p>📍 Remote / Online Store</p>
          </div>

          <div className="bg-gray-50 p-5 rounded-xl text-sm text-gray-500">
            We usually respond within 24 hours.
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-white border rounded-2xl p-6 shadow-sm"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500"
            required
          />

          <button
            type="submit"
            className="w-full bg-secondary text-white py-3 rounded-xl hover:bg-secondary/70 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
