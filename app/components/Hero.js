import Signature from "./Signature";
import HeroButtons from "./HeroButtons";

function Hero() {
  return (
    <div>
      <Signature />
      <div className="flex flex-col items-center mt-10">
        <h1 className="text-2xl md:text-3xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-white">
          Jake Cochran
        </h1>
        <div className="flex items-center mt-2 text-lg md:text-xl font-medium">
          <span className="text-white opacity-90">Software Engineer</span>
          <span className="mx-3 text-gray-500">|</span>
          <span className="text-white opacity-90">UX Design</span>
        </div>
      </div>

      <div className="flex justify-center items-center mt-[40px]">
        <HeroButtons />
      </div>
    </div>
  );
}

export default Hero;
