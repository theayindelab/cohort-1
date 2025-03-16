export default function ThankYou() {
  return (
    <div className="min-h-screen py-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-8 font-display">
            Thank You! 🎉
          </h1>
          <div className="text-xl text-gray-600 max-w-3xl mx-auto space-y-6">
            <p className="font-medium">
              Your generous support helps us continue our mission of revolutionizing education through 
              the convergence of AI and human learning.
            </p>
            <p>
              We're excited to have you as part of our journey in pushing the boundaries of 
              educational innovation.
            </p>
            <div className="mt-8">
              <a
                href="/"
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-200"
              >
                Return to Homepage
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 