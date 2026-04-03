import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    totalFollowers: 23004,
    stats: [
      {
        platform: "Facebook",
        username: "@nathanf",
        followers: 1987,
        change: 12,
      },
      {
        platform: "Twitter",
        username: "@nathanf",
        followers: 1044,
        change: 99,
      },
      {
        platform: "Instagram",
        username: "@realnathanf",
        followers: 11000,
        change: 1099,
      },
      {
        platform: "YouTube",
        username: "Nathan F.",
        followers: 8239,
        change: -144,
      },
    ],
  });
}