function HeroButtons() {
  return (
    <div className="mt-q0 flex gap-4">
      <a
        href="#about-me"
        className="bg-white text-black py-3 px-6 rounded-full font-medium"
      >
        About Me
      </a>
      <a
        href="#projects"
        className="bg-transparent border border-white text-white py-3 px-6 rounded-full font-medium"
      >
        My Projects
      </a>
    </div>
  );
}

export default HeroButtons;
