"use client";
import {
  hasScreenShare,
  StreamCall,
  StreamTheme,
  ParticipantView,
  StreamVideo,
  SpeakerLayout,
  useCall,
  useCallStateHooks,
  useStreamVideoClient,
  Call,
  CallControls,
} from "@stream-io/video-react-sdk";
import "@stream-io/video-styling/dist/css/styles.css";

import React, { useState } from "react";

interface MeetingPageProps {
  id: string;
}

const MeetingPage = ({ id }: MeetingPageProps) => {
  const [call, setcall] = useState<Call>();
  const client = useStreamVideoClient();
  const { useParticipants } = useCallStateHooks();
  if (!client) {
    return <div>Loading...</div>;
  }

  if (!call) {
    return (
      <button
        onClick={async () => {
          const call = client.call("default", id);
          await call.join();
          setcall(call);
        }}
      >
        Join meeting
      </button>
    );
  }

  return (
    <StreamVideo client={client}>
      <StreamTheme>
        <StreamCall call={call}>
          <SpeakerLayout />
          <CallControls />
        </StreamCall>
      </StreamTheme>
    </StreamVideo>
  );
};

export default MeetingPage;
