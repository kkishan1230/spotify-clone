import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";
import SpotifyWebApi from "spotify-web-api-node";
import Body from "./Body";
import Right from "./Right";
import Sidebar from "./Sidebar";

function Dashboard() {
  const spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID,
  });

  const router = useRouter();
  return (
    <main className="flex min-h-screen min-w-max bg-black lg:pb-24">
      <Sidebar />
      <Body spotifyApi={spotifyApi} />
      <Right />
    </main>
  );
}

export default Dashboard;
