import Image from "next/image";

export default function Research() {
  return (
    <div className="min-h-screen py-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Research Vision */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-8 font-display">Research Vision</h1>
          <div className="text-xl text-gray-600 max-w-4xl mx-auto space-y-6">
            <p className="font-medium">
              At the AYINDE Lab, we live at the intersection of advanced AI engineering and groundbreaking neuroscientific research on human learning.
            </p>
            <p>
              This unique positioning enables us to push the boundaries of educational innovation, combining cutting-edge AI systems 
              with deep insights into how humans learn and process information.
            </p>
            <p>
              Our research transcends traditional boundaries, creating adaptive, personalized learning experiences that harness 
              both technological advancement and human cognitive potential.
            </p>
          </div>
        </div>

        {/* Mission and Innovation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">Our Mission</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                To revolutionize education by developing cutting-edge AI systems that adapt to individual learning styles.
              </p>
              <p>
                We maintain the irreplaceable human element in education while working towards our 2025 launch of advanced 
                computational infrastructure designed specifically for educational innovation.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">Innovation Focus</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Our research combines neuroscience insights with advanced machine learning to create adaptive learning systems.
              </p>
              <p>
                These systems understand and respond to individual cognitive patterns, making education more effective and 
                accessible for everyone.
              </p>
            </div>
          </div>
        </div>

        {/* Research Areas */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-8 font-display">Key Research Areas</h2>
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">Human-AI Synergy</h3>
                <div className="space-y-4">
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Exploring groundbreaking interactions between human cognition and AI to create transformative learning experiences, 
                    driven by neuroscience insights and advanced computational models.
                  </p>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Our research focuses on understanding how human learning patterns can be enhanced through AI assistance 
                    while maintaining the crucial human element in education.
                  </p>
                </div>
                <ul className="list-none space-y-3 mt-6 text-gray-600">
                  <li className="flex items-center">
                    <span className="text-teal-500 mr-2">▹</span>
                    Integration of cognitive science with machine learning algorithms
                  </li>
                  <li className="flex items-center">
                    <span className="text-teal-500 mr-2">▹</span>
                    Development of human-centric AI teaching assistants
                  </li>
                  <li className="flex items-center">
                    <span className="text-teal-500 mr-2">▹</span>
                    Research on optimal human-AI interaction patterns in education
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">Personalized Computational Models</h3>
                <div className="space-y-4">
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Developing innovative methodologies and proprietary AI architectures tailored specifically for adaptive learning, 
                    uniquely customized to each individual's learning style, strengths, and challenges.
                  </p>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Our team is pioneering new approaches to real-time learning assessment and adaptation, creating systems 
                    that evolve with the learner.
                  </p>
                </div>
                <ul className="list-none space-y-3 mt-6 text-gray-600">
                  <li className="flex items-center">
                    <span className="text-teal-500 mr-2">▹</span>
                    Real-time learning pattern analysis and adaptation
                  </li>
                  <li className="flex items-center">
                    <span className="text-teal-500 mr-2">▹</span>
                    Custom AI model development for educational applications
                  </li>
                  <li className="flex items-center">
                    <span className="text-teal-500 mr-2">▹</span>
                    Integration of multiple learning modalities and preferences
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">Collaborative Scientific Innovation</h3>
                <div className="space-y-4">
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Leading interdisciplinary and industry collaborations, notably with Microsoft and NVIDIA, 
                    to pioneer the development of educational technologies that profoundly impact global learning communities.
                  </p>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Our partnerships enable us to leverage cutting-edge technology and expertise in creating next-generation
                    educational tools.
                  </p>
                </div>
                <ul className="list-none space-y-3 mt-6 text-gray-600">
                  <li className="flex items-center">
                    <span className="text-teal-500 mr-2">▹</span>
                    Strategic partnerships with leading tech companies
                  </li>
                  <li className="flex items-center">
                    <span className="text-teal-500 mr-2">▹</span>
                    Cross-disciplinary research initiatives
                  </li>
                  <li className="flex items-center">
                    <span className="text-teal-500 mr-2">▹</span>
                    Development of scalable educational solutions
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl shadow-xl overflow-hidden">
          <div className="px-8 py-16 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6 font-display">Stay in the Loop! 📬</h2>
              <p className="text-white text-xl leading-relaxed mb-8">
                Get in-depth research updates, findings, and breakthroughs
                <span className="block mt-2">delivered straight to your inbox.</span>
              </p>
              <a
                href="https://theayindelab.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-teal-600 font-semibold px-8 py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:bg-gray-50 text-lg"
              >
                Subscribe to Our Newsletter
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 