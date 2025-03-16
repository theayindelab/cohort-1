/**
 * Home Page Component
 * 
 * The main landing page for the AYINDE Lab website. This component includes:
 * - Hero section with lab introduction
 * - Upcoming events section
 * - Research areas overview
 * - Newsletter subscription and support sections
 */

import Image from "next/image";
import DonateButton from "./components/DonateButton";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      {/* Hero Section - Main introduction to the lab */}
      <div className="bg-gradient-to-r from-teal-500 to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 font-display">
            Welcome to 
            <span className="block mt-2">AYINDE Lab</span>
          </h1>
          {/* Lab description and mission statement */}
          <div className="mt-6 text-xl max-w-3xl space-y-4">
            <p className="font-medium">
              At the AYINDE Lab, we live at the intersection of two exciting fields:
            </p>
            <div className="pl-4 space-y-2">
              <p className="font-light">🧠 Advanced AI Engineering</p>
              <p className="font-light">🔬 Groundbreaking Neuroscientific Research</p>
            </div>
            <p className="mt-6 font-medium">
              Our mission? To revolutionize education through this unique convergence of technology and human understanding.
            </p>
            {/* Call to action with donation button */}
            <div className="mt-8 flex items-center justify-start space-x-4">
              <span className="text-white/80">Join us in shaping the future of education</span>
              <DonateButton variant="white" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Upcoming Events Section - Displays next lab events */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 font-display">Upcoming Events</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3 font-display">Cohort 1 Demo Day</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Join us for an exciting showcase of groundbreaking research and innovations from our inaugural cohort.
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-teal-600 font-display">TBD</p>
                  <p className="text-gray-500 mt-2">Date to be announced</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Research Areas Preview - Overview of main research focuses */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 font-display">Research Areas</h2>
          <div className="grid grid-cols-1 gap-8">
            {/* Human-AI Synergy Research Area */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">Human-AI Synergy</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Exploring groundbreaking interactions between human cognition and AI to create transformative learning experiences.
                </p>
              </div>
            </div>

            {/* Personalized Computational Models Research Area */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">Personalized Computational Models</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Developing innovative methodologies and proprietary AI architectures tailored specifically for adaptive learning.
                </p>
              </div>
            </div>

            {/* Collaborative Scientific Innovation Research Area */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">Collaborative Scientific Innovation</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Leading interdisciplinary and industry collaborations with Microsoft and NVIDIA to pioneer educational technologies.
                </p>
                <div className="mt-6 flex items-center justify-end space-x-3 text-sm">
                  <span className="text-gray-500">Support innovative research</span>
                  <DonateButton variant="small" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter and Support Section - Split section for engagement */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Newsletter Subscription */}
          <div className="bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl shadow-xl overflow-hidden">
            <div className="px-8 py-12 text-center">
              <div className="mx-auto">
                <h2 className="text-3xl font-bold text-white mb-4 font-display">Stay in the Loop! 📬</h2>
                <p className="text-white text-lg leading-relaxed mb-6">
                  Get the latest updates on our research and breakthroughs.
                </p>
                <a
                  href="https://theayindelab.substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-teal-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:bg-gray-50 text-lg"
                >
                  Subscribe to Newsletter
                </a>
              </div>
            </div>
          </div>

          {/* Support Section */}
          <div className="bg-gradient-to-br from-purple-50 to-teal-50 rounded-2xl shadow-xl overflow-hidden">
            <div className="px-8 py-12 text-center">
              <div className="mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">Power Our Vision 🚀</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Your support helps us push the boundaries of human-AI learning integration.
                </p>
                <DonateButton variant="large" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
