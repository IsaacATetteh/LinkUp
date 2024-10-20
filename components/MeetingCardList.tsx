"use client";
import React, { useState } from "react";
import { CiCalendar } from "react-icons/ci";
import { CiSquarePlus } from "react-icons/ci";
import { MdGroups2 } from "react-icons/md";
import { BiVideoRecording } from "react-icons/bi";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUser } from "@clerk/clerk-react";
import {
  Call,
  StreamVideo,
  StreamVideoClient,
  useStreamVideoClient,
} from "@stream-io/video-react-sdk";
import { Textarea } from "./ui/textarea";

const MeetingCardList = () => {
  const { user, isLoaded } = useUser();
  const [call, setcall] = useState<Call>();
  const client = useStreamVideoClient();

  const [meetingInfo, setmeetingInfo] = useState({
    title: "",
    description: "",
    started: new Date(),
  });
  const handleMeetingCreate = async () => {
    if (!isLoaded || !user) return;
    const callType = "default";
    if (!client) return;
    try {
      const callId = crypto.randomUUID();
      const call = client.call(callType, callId);
      const startTime = meetingInfo.started.toISOString();
      const title = meetingInfo.title;
      const description = meetingInfo.description;
      // optionally provide additional data
      await call.getOrCreate({
        data: {
          starts_at: startTime,
          custom: {
            description,
          },
        },
      });

      setcall(call);
    } catch (error) {
      console.log("Error creating meeting", error);
    }
  };
  return (
    <>
      {/* New Meeting Button */}
      <Dialog>
        <DialogTrigger asChild>
          <div className="rounded-2xl p-4 md:py-8 odd:bg-[#eab8f8] even:bg-primary/40 min-w-[150px] flex-1 cursor-pointer ">
            <div className="py-2">
              <CiSquarePlus size={22} />
            </div>
            <h2 className="font-bold text-xl">New Meeting</h2>
            <p className="text-sm">Setup a new recording</p>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Start a meeting</DialogTitle>
            <DialogDescription>
              Set a title and what your meeting is about
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <Input id="title" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Textarea id="description" className="col-span-3" />
            </div>
            {call && <MeetingLink call={call} />}
          </div>
          <DialogFooter>
            <Button onClick={handleMeetingCreate} type="submit">
              Create
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Join meeting button */}
      <div className="rounded-2xl p-4 md:py-8 odd:bg-[#eab8f8] even:bg-primary/40 min-w-[150px] flex-1 cursor-pointer ">
        <div className="py-2">
          <MdGroups2 size={22} />
        </div>
        <h2 className="font-bold text-xl">Join a meeting</h2>
        <p className="text-sm">Join with an invitation link</p>
      </div>

      {/* Schedule meeting button */}
      <div className="rounded-2xl p-4 md:py-8 odd:bg-[#eab8f8] even:bg-primary/40 min-w-[150px] flex-1 cursor-pointer ">
        <div className="py-2">
          <CiCalendar size={22} />
        </div>
        <h2 className="font-bold text-xl">Schedule a meeting</h2>
        <p className="text-sm">Plan a time for your meeting</p>
      </div>

      {/* View recordings button */}
      <div className="rounded-2xl p-4 md:py-8 odd:bg-[#eab8f8] even:bg-primary/40 min-w-[150px] flex-1 cursor-pointer ">
        <div className="py-2">
          <BiVideoRecording size={22} />
        </div>
        <h2 className="font-bold text-xl">View recordings</h2>
        <p className="text-sm">Watch an existing recording</p>
      </div>
    </>
  );
};

export default MeetingCardList;

interface MeetingLinkProps {
  call: Call;
}

function MeetingLink({ call }: MeetingLinkProps) {
  const meetLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${call.id}`;
  return <div className="text-center">{meetLink}</div>;
}
