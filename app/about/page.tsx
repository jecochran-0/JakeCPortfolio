import Experience from "../components/Experience";
import Bio from "../components/Bio";

export default function About() {
  return (
    <div>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <Bio />
      </div>
      {/* Spacer at the bottom of the section */}
      <div className="bg-neutral-800 h-1 w-full" />
      <Experience />
    </div>
  );
}
