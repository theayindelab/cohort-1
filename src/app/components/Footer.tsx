'use client';

import { useState, useEffect } from 'react';
import DonateButton from './DonateButton';

export default function Footer() {
  const [year, setYear] = useState('');

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="flex items-center space-x-2 text-gray-600">
            <span>Made with</span>
            <span className="text-red-500 animate-pulse">❤️</span>
            <span>by AYINDE Lab</span>
          </div>
          <DonateButton variant="default" />
          <div className="text-sm text-gray-500">
            © {year} AYINDE Lab. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
} 