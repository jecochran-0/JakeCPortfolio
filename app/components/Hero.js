import Signature from "./Signature";
import HeroButtons from "./HeroButtons";

function Hero() {
  return (
    <div>
      <Signature />
      <div className="flex justify-center mt-10 text-xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-l from-sky-200 via-stone-100 to-sky-300 text-transparent bg-clip-text">
        Jake Cochran <span className="mx-2 text-gray-500">|</span> Software
        Engineer <span className="mx-2 text-gray-500">|</span> UX Design
      </div>

      <div className="flex justify-center items-center mt-[40px]">
        <HeroButtons />
      </div>
    </div>
  );
}

export default Hero;
