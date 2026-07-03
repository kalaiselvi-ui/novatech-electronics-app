const About = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 py-14">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">About Our Store</h1>
        <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
          We build a modern shopping experience focused on simplicity, speed,
          and quality products at the best prices.
        </p>
      </div>

      {/* Mission */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            Our goal is to make online shopping fast, intuitive, and enjoyable.
            We carefully select products and design experiences that help users
            find exactly what they need without confusion.
          </p>

          <p className="text-gray-600 leading-relaxed">
            This project is built using React, Tailwind CSS, and modern frontend
            practices like reusable components, state management, and API-driven
            design.
          </p>
        </div>

        <div className="bg-gradient-to-br from-teal-50 to-secondary/50 rounded-2xl p-10 text-center">
          <h3 className="text-xl font-semibold text-gray-800">
            Why Choose Us?
          </h3>

          <div className="mt-6 space-y-3 text-gray-600">
            <p>⚡ Fast & smooth UI</p>
            <p>🛒 Real ecommerce flow</p>
            <p>🔒 Secure & scalable structure</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-14">
        <a
          href="/products"
          className="inline-block bg-secondary text-white px-6 py-3 rounded-xl hover:bg-secondary/70 transition"
        >
          Start Shopping
        </a>
      </div>
    </section>
  );
};

export default About;
