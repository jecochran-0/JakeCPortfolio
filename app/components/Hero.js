import Signature from "./Signature";
import HeroButtons from "./HeroButtons";

function Hero() {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8">
      <Signature />
      <div className="flex flex-col items-center mt-6 sm:mt-8 md:mt-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-white text-center">
          Jake Cochran
        </h1>
        <div className="flex flex-col sm:flex-row items-center mt-2 text-base sm:text-lg md:text-xl font-medium">
          <span className="text-white opacity-90">Software Engineer</span>
          <span className="hidden sm:block mx-3 text-gray-500">|</span>
          <span className="text-white opacity-90 mt-1 sm:mt-0">UX Design</span>
        </div>
      </div>

      <div className="flex justify-center items-center mt-6 sm:mt-8 md:mt-[40px]">
        <HeroButtons />
      </div>
    </div>
  );
}

export default Hero;
