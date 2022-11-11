// import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";
import SpotifyWebApi from "spotify-web-api-node";
import Body from "./Body";
import Right from "./Right";
import Sidebar from "./Sidebar";
import { playingTrackState } from "../atoms/playerAtom";
import { useRecoilState } from "recoil";

function Dashboard() {
  const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState);
  const chooseTrack = (track) => {
    setPlayingTrack(track);
  };

  const spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID,
  });

  const router = useRouter();
  return (
    <main className="flex min-h-screen  bg-black lg:pb-24 mx-auto">
      <Sidebar />
      <div></div>
      <Body spotifyApi={spotifyApi} chooseTrack={chooseTrack} />
      <Right spotifyApi={spotifyApi} chooseTrack={chooseTrack} />
    </main>
  );
}

export default Dashboard;
