/**
 * Footer Component
 * 
 * A site-wide footer component that includes:
 * - "Made with love" message with animated heart
 * - Donation button
 * - Copyright information with dynamically updated year
 * 
 * Uses client-side rendering for the dynamic year calculation
 * to prevent hydration mismatches.
 */

'use client';

import { useState, useEffect } from 'react';
import DonateButton from './DonateButton';

export default function Footer() {
  // State for the current year, initialized empty to prevent hydration mismatch
  const [year, setYear] = useState('');

  // Set the year after component mount to ensure client-side rendering
  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center justify-center space-y-8">
          {/* Animated "Made with love" message */}
          <div className="flex items-center space-x-2 text-gray-600">
            <span>Made with</span>
            <span className="text-red-500 animate-pulse">❤️</span>
            <span>by AYINDE Lab</span>
          </div>
          
          {/* Donation button - using default variant */}
          <DonateButton variant="default" />
          
          {/* Copyright notice with dynamic year */}
          <div className="text-sm text-gray-500">
            © {year} AYINDE Lab. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
} 