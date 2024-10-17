import Image from "next/image";
import MeetingCard from "../components/MeetingCard";
import { CiCalendar } from "react-icons/ci";
import { CiSquarePlus } from "react-icons/ci";
import { MdGroups2 } from "react-icons/md";
import { BiVideoRecording } from "react-icons/bi";
import WelcomeCard from "../components/WelcomeCard";

export default function Home() {
  return (
    <div className="flex gap-4 flex-col md:flex-row p-4">
      <div className="flex flex-col w-full lg:w-2/3 gap-4">
        {" "}
        <div className="flex gap-4 flex-wrap">
          <WelcomeCard />
        </div>
        <div className="flex flex-wrap gap-4 justify-between">
          <MeetingCard
            title="New Meeting"
            description="Setup a new recording"
            icon={<CiSquarePlus size={22} />}
          />
          <MeetingCard
            title="Join a meeting"
            description="Join with an invitation link"
            icon={<MdGroups2 size={22} />}
          />
          <MeetingCard
            title="Schedule a meeting"
            description="Plan a time for your meeting"
            icon={<CiCalendar size={22} />}
          />
          <MeetingCard
            title="View recordings"
            description="Watch an existing recording"
            icon={<BiVideoRecording size={22} />}
          />
        </div>
      </div>
      <div className="w-full lg:w-1/3">r</div>
    </div>
  );
}
