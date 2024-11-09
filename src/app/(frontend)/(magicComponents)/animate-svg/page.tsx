import React from "react";
import PlayPauseButton from "./PlayPauseButton";
import MuteUnmuteButton from "./MuteUnMuteButton";

const page = () => {
  return (
    <div>
      <div className="flex size-16 h-16 w-16 items-center justify-center rounded-full bg-white">
        <PlayPauseButton />
      </div>
      <div className="flex size-16 h-16 w-16 items-center justify-center rounded-full bg-white">
        <MuteUnmuteButton />
      </div>
    </div>
  );
};

export default page;
