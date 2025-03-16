/**
 * ProfileModal Component
 * 
 * A modal component for displaying detailed information about team members.
 * Includes:
 * - Name and role
 * - Professional bio
 * - Research interests
 * - LinkedIn profile link
 * 
 * The modal is controlled through isOpen and onClose props for visibility management.
 */

'use client';

// TypeScript interface for component props
interface ProfileModalProps {
  isOpen: boolean;              // Controls modal visibility
  onClose: () => void;         // Function to handle modal closing
  name: string;                // Team member's name
  role: string;                // Team member's role/position
  linkedIn?: string;           // Optional LinkedIn profile URL
  researchInterests: string[]; // Array of research interests
  bio?: string;                // Optional biography text
}

export default function ProfileModal({
  isOpen,
  onClose,
  name,
  role,
  linkedIn,
  researchInterests,
  bio,
}: ProfileModalProps) {
  // Early return if modal should be hidden
  if (!isOpen) return null;

  return (
    // Modal overlay with semi-transparent background
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full mx-4 overflow-hidden">
        <div className="p-6">
          {/* Header section with name, role, and close button */}
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">{name}</h3>
              <p className="text-lg font-semibold text-teal-600 mt-1">{role}</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Close</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Biography section - conditionally rendered */}
          {bio && (
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-gray-900">About</h4>
              <p className="mt-2 text-gray-600">{bio}</p>
            </div>
          )}

          {/* Research interests section with bullet points */}
          <div className="mt-6">
            <h4 className="text-lg font-semibold text-gray-900">Research Interests</h4>
            <ul className="mt-2 space-y-2">
              {researchInterests.map((interest, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <svg className="h-4 w-4 mr-2 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {interest}
                </li>
              ))}
            </ul>
          </div>

          {/* LinkedIn profile link - conditionally rendered */}
          {linkedIn && (
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-gray-900">Connect</h4>
              <a
                href={linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-2 text-blue-600 hover:text-blue-800"
              >
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn Profile
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 