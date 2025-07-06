import Hero from "./components/Hero";
import CampusUdla from "./components/CampusUdla";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <div className="flex-1 flex flex-col justify-center items-center px-4 sm:px-0">
        <CampusUdla />
      </div>
    </div>
  );
}
