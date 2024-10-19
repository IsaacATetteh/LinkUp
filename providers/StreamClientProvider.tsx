"use client";
import { StreamVideo, StreamVideoClient } from "@stream-io/video-react-sdk";
import { ReactNode, useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { tokenProvider } from "@/server/actions/create-stream-token";

const apiKey = process.env.NEXT_PUBLIC_STREAM_VIDEO_API_KEY;

const StreamVideoProvider = ({ children }: { children: ReactNode }) => {
  const [videoClient, setvideoClient] = useState<StreamVideoClient>();
  const { user, isLoaded } = useUser();

  useEffect(() => {
    console.log("reached");
    if (!isLoaded || !user) return;
    if (!apiKey) {
      throw new Error("Stream API key is missing");
    }

    const client = new StreamVideoClient({
      apiKey,
      user: {
        id: user.id,
        name: user.fullName || undefined,
        image: user.imageUrl,
      },
      tokenProvider,
    });
    setvideoClient(client);
  }, [user, isLoaded]);

  if (!videoClient) return <div>Loading...</div>;

  return <StreamVideo client={videoClient}>{children}</StreamVideo>;
};

export default StreamVideoProvider;
