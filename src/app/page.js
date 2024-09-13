
import Calendar from "./components/Calendar";
import InterviewSection from "./components/InterviewSection";
import Slotbook from "./components/Slotbook";
import TrackerTimeline from "./components/TrackerTimeline";

export default function Home() {
  return (
    <div className="flex-1 p-8  " style={{ backgroundColor: "#EAF9FF" }}>
      <TrackerTimeline />
      <div className="bg-white rounded-lg shadow-lg mt-4 border border-blue-500">
        <div className="flex justify-end mt-3 mr-4">
          <button className="px-4 py-1 rounded-md text-white text-sm" style={{ backgroundColor: "#01B0F1" }}>  View Student  </button>
        </div>

        <div className="bg-white p-8 mt-5 rounded-lg shadow-lg flex justify-between">

          <InterviewSection />

          <Calendar  />
        </div>
      </div>

    </div>
  );
}
