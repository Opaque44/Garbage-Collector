import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 py-12 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-green-700 mb-6">
          About CleanCity
        </h1>

        <p className="text-lg mb-6">
          <strong>CleanCity</strong> is a citizen-driven initiative to tackle
          urban and rural waste issues by making reporting garbage problems easy
          and accessible. Through our platform, anyone can report garbage piles,
          improper disposal, illegal dumping, and more — helping local
          authorities respond faster and more effectively.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mb-10">
          <div>
            <h2 className="text-2xl font-semibold text-green-600 mb-2">
              Our Mission
            </h2>
            <p>
              Our mission is to build cleaner, healthier, and more sustainable
              environments by encouraging community participation in waste
              management. We believe that change starts with awareness and small
              actions taken collectively.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-green-600 mb-2">
              What We Do
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Allow users to report garbage incidents with images & location
              </li>
              <li>Provide real-time updates to municipal bodies</li>
              <li>Offer awareness resources on segregation & recycling</li>
              <li>Empower citizens to participate in clean-up drives</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-100 border-l-4 border-green-500 p-6 rounded">
          <h3 className="text-xl font-semibold mb-2 text-green-800">
            Why It Matters
          </h3>
          <p className="text-sm text-gray-700">
            Unmanaged waste leads to pollution, health issues, water
            contamination, and harm to wildlife. With CleanCity, we're creating
            a direct link between problems spotted and action taken — so no
            garbage goes unnoticed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
