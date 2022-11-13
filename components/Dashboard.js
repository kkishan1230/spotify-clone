// import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-node";
import Body from "./Body";
import Right from "./Right";
import Sidebar from "./Sidebar";
import { playingTrackState } from "../atoms/playerAtom";
import { useRecoilState } from "recoil";
import { useSession } from "next-auth/react";
import Player from "./Player";

function Dashboard() {
  const { data: session } = useSession();
  const accessToken = session?.accessToken;
  const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState);
  const chooseTrack = (track) => {
    setPlayingTrack(track);
  };
  const spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID,
  });
  const [showPlayer, setShowPlayer] = useState(false);
  const router = useRouter();

  // useEffects
  useEffect(() => {
    setShowPlayer(true);
  }, []);

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);
  return (
    <main className="flex min-h-screen  bg-black lg:pb-24 mx-auto">
      <Sidebar />
      <div></div>
      <Body spotifyApi={spotifyApi} chooseTrack={chooseTrack} />
      <Right spotifyApi={spotifyApi} chooseTrack={chooseTrack} />
      {showPlayer && (
        <div className="fixed bottom-0 left-0 right-0 z-50">
          <Player accessToken={accessToken} trackUri={playingTrack.uri} />
        </div>
      )}
    </main>
  );
}

export default Dashboard;
