import hero from '../../public/bloghero.webp'; // Correct image path for Next.js
import Image from 'next/image';

export default function Hero() {
  return (
    <div>
      {/* Start Hero Section */}
      <div className="relative w-full h-[70vh] sm:h-[80vh] lg:h-[90vh] bg-gray-100">
        {/* Hero Image */}
        <div className="w-full h-full overflow-hidden relative">
          <Image
            src={hero}
            alt="hero"
            layout="fill" // Ensures the image covers the entire div
            objectFit="cover" // Ensures the image doesn't stretch or distort
            className="absolute top-0 left-0"
          />
          
          {/* Black Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
        </div>

        {/* Text Section */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight">
            Dive Into a World of Insights and Ideas
            </h1>
            <p className="mt-4 text-lg sm:text-xl md:text-2xl font-light sm:font-semibold px-4 ">
            Fuel your passion for learning with carefully curated blogs that entertain, educate, and inspire.
            </p>
          </div>
        </div>
      </div>
      {/* End Hero Section */}
    </div>
  );
}
