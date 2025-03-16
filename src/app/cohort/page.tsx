'use client';

import { useState } from 'react';
import ProfileModal from '../components/ProfileModal';

interface TeamMember {
  name: string;
  role: string;
  linkedIn?: string;
  researchInterests: string[];
  bio?: string;
}

export default function CohortPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const teamMembers = {
    pi: {
      name: "Vihaan Nama",
      role: "Principal Investigator",
      linkedIn: "https://www.linkedin.com/in/vihaan-nama/",
      researchInterests: [
        "Human-AI Learning Integration",
        "Cognitive Computing Systems",
        "Educational Technology Innovation",
        "Adaptive Learning Platforms"
      ],
      bio: "Leading the vision of integrating human cognition with advanced machine learning to revolutionize education."
    },
    leads: [
      {
        name: "Joseph Ayinde",
        role: "Research Lead",
        linkedIn: "https://www.linkedin.com/in/josephayinde/",
        researchInterests: [
          "Personalized Learning Systems",
          "Neural-Adaptive Interfaces",
          "Educational AI Ethics",
          "Cognitive Computing"
        ],
        bio: "Pioneering the development of adaptive learning systems that bridge human cognition and AI capabilities."
      },
      {
        name: "Keshav Saxena",
        role: "Research Lead",
        linkedIn: "https://www.linkedin.com/in/keshav-saxena-9494b6206/",
        researchInterests: [
          "Learning Analytics",
          "Educational AI Architecture",
          "Cognitive Model Integration",
          "Adaptive Systems"
        ],
        bio: "Developing innovative AI architectures that enhance human learning potential."
      }
    ],
    assistants: [
      {
        name: "Arnav Chatrathi",
        role: "Research Assistant",
        linkedIn: "https://www.linkedin.com/in/arnavchatrathi/",
        researchInterests: [
          "Cognitive Learning Models",
          "Educational Data Analysis",
          "AI-Enhanced Teaching"
        ]
      },
      {
        name: "Johnson Nifemi",
        role: "Research Assistant",
        linkedIn: "https://www.linkedin.com/in/johnson-emmanuel/",
        researchInterests: [
          "Learning Experience Design",
          "Educational Software Development",
          "AI-Human Interaction"
        ]
      },
      {
        name: "Nilesh Kanti",
        role: "Research Assistant",
        linkedIn: "https://www.linkedin.com/in/nileshkanti/",
        researchInterests: [
          "Learning Analytics",
          "Educational Data Science",
          "Adaptive Learning Systems"
        ]
      },
      {
        name: "Saiakhil Chilaka",
        role: "Research Assistant",
        linkedIn: "https://www.linkedin.com/in/akhilchilaka/",
        researchInterests: [
          "Visual Learning Systems",
          "Educational AI Models",
          "Cognitive Computing"
        ]
      },
      {
        name: "Ulises Ronnau",
        role: "Research Assistant",
        linkedIn: "https://www.linkedin.com/in/ulises-roennau-a32b432b2/",
        researchInterests: [
          "Learning Platform Development",
          "Educational Technology",
          "AI-Enhanced Education"
        ]
      },
      {
        name: "Alexander Sumner",
        role: "Research Assistant",
        linkedIn: "https://www.linkedin.com/in/wumner/",
        researchInterests: [
          "Cognitive AI Systems",
          "Learning Algorithms",
          "Educational Analytics"
        ]
      },
      {
        name: "Yi Tan",
        role: "Research Assistant",
        researchInterests: [
          "Learning Data Analysis",
          "Educational AI Applications",
          "Cognitive Computing"
        ]
      }
    ]
  };

  const TeamMemberCard = ({ member }: { member: TeamMember }) => (
    <div 
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
      onClick={() => setSelectedMember(member)}
    >
      <div className="p-6">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
          <p className="text-lg font-semibold text-teal-600">
            {member.role}
          </p>
          {member.bio && (
            <p className="text-gray-600 text-sm">
              {member.bio}
            </p>
          )}
          <p className="text-sm text-gray-500">
            Click to view profile
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900">AYINDE Lab Cohort 1</h1>
          <p className="mt-4 text-xl text-gray-500">
            Pioneering the future of human-AI learning integration.
          </p>
        </div>
      </div>

      {/* Team Members */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Principal Investigator */}
        <div className="space-y-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Principal Investigator</h2>
          <div className="grid grid-cols-1">
            <TeamMemberCard member={teamMembers.pi} />
          </div>
        </div>

        {/* Research Leads */}
        <div className="space-y-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Research Leads</h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {teamMembers.leads.map((lead, index) => (
              <TeamMemberCard key={index} member={lead} />
            ))}
          </div>
        </div>

        {/* Research Assistants */}
        <div className="space-y-12">
          <h2 className="text-3xl font-bold text-gray-900">Research Assistants</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.assistants.map((assistant, index) => (
              <TeamMemberCard key={index} member={assistant} />
            ))}
          </div>
        </div>

        {/* Vision & Impact */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Vision & Impact</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="prose max-w-none text-gray-600">
              <p className="text-lg">
                At AYINDE Lab, we're pioneering a revolutionary approach to learning by seamlessly 
                integrating human cognition with advanced machine learning. Our groundbreaking 
                supercomputer initiative, launching in 2025, will establish new frontiers in 
                human-AI educational interaction.
              </p>
              <p className="text-lg mt-4">
                Our diverse team of AI enthusiasts and learning experts is united by a singular vision: 
                to unlock unprecedented possibilities in personalized education through the fusion of 
                computational power, neuroscience insights, and innovative AI technologies.
              </p>
            </div>
          </div>
        </div>

        {/* Research Focus Areas */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Research Focus Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Human-AI Integration</h3>
              <p className="text-gray-600">
                Developing advanced systems that seamlessly blend human cognition with artificial intelligence.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Adaptive Learning</h3>
              <p className="text-gray-600">
                Creating personalized educational experiences that evolve with each learner's progress.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Educational Innovation</h3>
              <p className="text-gray-600">
                Pushing the boundaries of what's possible in technology-enhanced learning.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Modal */}
      {selectedMember && (
        <ProfileModal
          isOpen={!!selectedMember}
          onClose={() => setSelectedMember(null)}
          name={selectedMember.name}
          role={selectedMember.role}
          linkedIn={selectedMember.linkedIn}
          researchInterests={selectedMember.researchInterests}
          bio={selectedMember.bio}
        />
      )}
    </div>
  );
} 