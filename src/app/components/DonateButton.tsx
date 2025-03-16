'use client';

type DonateButtonProps = {
  variant?: 'default' | 'white' | 'small' | 'large';
};

export default function DonateButton({ variant = 'default' }: DonateButtonProps) {
  const baseStyles = "inline-flex items-center font-medium rounded-lg transition-all duration-200";
  
  const variantStyles = {
    default: "px-6 py-3 text-white bg-teal-600 hover:bg-teal-700 focus:ring-2 focus:ring-offset-2 focus:ring-teal-500",
    white: "px-6 py-3 text-teal-600 bg-white hover:bg-white/90 focus:ring-2 focus:ring-offset-2 focus:ring-white",
    small: "px-4 py-2 text-sm text-white bg-teal-600 hover:bg-teal-700",
    large: "px-8 py-4 text-lg text-white bg-teal-600 hover:bg-teal-700 shadow-md hover:shadow-lg"
  };

  return (
    <a
      href="https://buy.stripe.com/aEUaHK3Bm5CU132aEF"
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variantStyles[variant]}`}
    >
      <span className="mr-2">Support Our Research</span>
      {variant === 'small' ? '🔬' : '❤️'}
    </a>
  );
} 