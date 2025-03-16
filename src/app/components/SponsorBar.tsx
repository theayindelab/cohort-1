import Image from 'next/image';

const SponsorBar = () => {
  return (
    <div className="w-full bg-white py-8 overflow-hidden">
      <div className="relative flex items-center">
        <div className="animate-scroll flex items-center space-x-20 whitespace-nowrap">
          {/* First set of logos */}
          <div className="flex items-center space-x-20">
            <div className="flex items-center h-12">
              <Image
                src="/microsoft.svg"
                alt="Microsoft"
                width={240}
                height={60}
                className="object-contain"
              />
            </div>
            <div className="flex items-center h-12">
              <Image
                src="/nvidia.svg"
                alt="NVIDIA"
                width={240}
                height={60}
                className="object-contain"
              />
            </div>
          </div>
          {/* Duplicate set for seamless scrolling */}
          <div className="flex items-center space-x-20">
            <div className="flex items-center h-12">
              <Image
                src="/microsoft.svg"
                alt="Microsoft"
                width={240}
                height={60}
                className="object-contain"
              />
            </div>
            <div className="flex items-center h-12">
              <Image
                src="/nvidia.svg"
                alt="NVIDIA"
                width={240}
                height={60}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorBar; 