import {
  HMSRoomProvider,
  useHMSStore,
  selectIsConnectedToRoom,
} from "@100mslive/hms-video-react";
import Join from "./components/Join";
import Room from "./components/Room";
import "./App.css";
import { useState } from "react";

import { Client } from "appwrite";

const SpacesApp = () => {
  const isConnected = useHMSStore(selectIsConnectedToRoom);
  return (
    <>
      {isConnected ? (
        <Room />
      ) : (
        <>
          <Join />
          <Join />
          <Join />
          <Join />
        </>
      )}
    </>
  );
};

function App() {
  return (
    <HMSRoomProvider>
      <div className="page">
        <SpacesApp />
      </div>
    </HMSRoomProvider>
  );
}

export default App;
