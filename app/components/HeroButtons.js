function HeroButtons() {
  return (
    <div className="flex gap-6 mt-6">
      <button className="bg-white text-black h-[60px] w-[160px] rounded-xl text-md transition-all duration-300 ease-in-out shadow-md hover:shadow-lg hover:scale-105 hover:bg-gray-200 focus:ring-2 focus:ring-white">
        About Me
      </button>
      <button className="bg-white text-black h-[60px] w-[160px] rounded-xl text-lg transition-all duration-300 ease-in-out shadow-md hover:shadow-lg hover:scale-105 hover:bg-gray-200 focus:ring-2 focus:ring-white">
        My Projects
      </button>
    </div>
  );
}

export default HeroButtons;
