"use server";
import { StreamClient } from "@stream-io/node-sdk";
import { currentUser } from "@clerk/nextjs/server";

const apiKey = process.env.NEXT_PUBLIC_STREAM_VIDEO_API_KEY;
const secret = process.env.STREAM_VIDEO_API_SECRET;

export const tokenProvider = async () => {
  console.log("generating token");
  const user = await currentUser();
  if (!user) throw new Error("User is not authenticated");
  if (!apiKey || !secret)
    throw new Error("Stream API key or secret is missing");

  const client = new StreamClient(apiKey, secret);
  const vailidity = 60 * 60; // 1 hour
  const token = client.generateUserToken({
    user_id: user.id,
    validity_in_seconds: vailidity,
    exp: Math.floor(Date.now() / 1000) + vailidity,
  });
  console.log("generated token", token);

  return token;
};
