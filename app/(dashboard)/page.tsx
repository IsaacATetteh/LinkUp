import MeetingCardList from "@/components/MeetingCardList";
import WelcomeCard from "../../components/WelcomeCard";
import CalendarCard from "../../components/CalendarCard";
import ReminderCard from "@/components/ReminderCard";

export default function Home() {
  return (
    <div className="flex gap-4 flex-col md:flex-row p-4">
      <div className="flex flex-col w-full lg:w-2/3 gap-4">
        <div className="flex gap-4 flex-wrap h-[450px]">
          <WelcomeCard />
        </div>
        <div className="flex flex-wrap gap-4 justify-between">
          <MeetingCardList />
        </div>
      </div>
      <div className="flex flex-col w-full lg:w-1/3 gap-8">
        <CalendarCard />
        <ReminderCard />
      </div>
    </div>
  );
}
