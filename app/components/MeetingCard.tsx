import React from "react";

type MeetingCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const MeetingCard = ({ title, description, icon }: MeetingCardProps) => {
  return (
    <div className="rounded-2xl text-white p-4 md:py-8 odd:bg-purple-400 even:bg-primary/40 min-w-[150px] flex-1 cursor-pointer">
      <div className="py-2">{icon}</div>
      <h2 className="font-bold text-xl">{title}</h2>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default MeetingCard;
