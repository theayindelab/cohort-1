'use client';

/**
 * DonateButton Component
 * 
 * A reusable button component for donation actions throughout the website.
 * Supports multiple visual variants to fit different contexts.
 * 
 * @component
 * @param {Object} props
 * @param {'default' | 'white' | 'small' | 'large'} [props.variant='default'] - The visual style variant of the button
 */

// Define the available button variants and their corresponding styles
const variantStyles = {
  default: "bg-teal-600 text-white hover:bg-teal-700 px-6 py-3 text-lg",
  white: "bg-white text-teal-600 hover:bg-gray-50 px-6 py-3 text-lg",
  small: "bg-teal-600 text-white hover:bg-teal-700 px-4 py-2 text-sm",
  large: "bg-teal-600 text-white hover:bg-teal-700 px-8 py-4 text-xl"
};

// TypeScript interface for component props
interface DonateButtonProps {
  variant?: keyof typeof variantStyles;
}

export default function DonateButton({ variant = 'default' }: DonateButtonProps) {
  // Base classes for consistent button styling
  const baseClasses = "inline-flex items-center justify-center font-semibold rounded-lg transition-colors duration-200";
  
  // Combine base classes with variant-specific styles
  const buttonClasses = `${baseClasses} ${variantStyles[variant]}`;

  // Determine emoji based on variant
  const emoji = variant === 'small' ? '💝' : '🚀';

  return (
    <a
      href="https://buy.stripe.com/test_28o17h0Yc3Ht3KgcMN"
      target="_blank"
      rel="noopener noreferrer"
      className={buttonClasses}
    >
      <span className="mr-2">Support Our Research</span>
      <span>{emoji}</span>
    </a>
  );
} 