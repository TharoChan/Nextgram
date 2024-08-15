"use client";

import React from "react";
import { useTest } from "./High";

const DigitalClock: React.FC = () => {
  const { time, formatTime, stopTimer, pauseTimer, resumeTimer } = useTest();

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-900">
      <div className="mb-8 font-mono text-7xl font-bold text-white md:text-9xl">
        {formatTime(time.hours)}:<span className="inline-block w-8"> </span>
        {formatTime(time.minutes)}:<span className="inline-block w-8"> </span>
        {formatTime(time.seconds)}:<span className="inline-block w-8"> </span>
        {formatTime(time.milliseconds, 2).slice(0, 1)}
      </div>
      <div className="flex space-x-4">
        <button
          onClick={stopTimer}
          className="rounded bg-red-500 px-4 py-2 text-white"
        >
          Stop
        </button>
        <button
          onClick={pauseTimer}
          className="rounded bg-yellow-500 px-4 py-2 text-white"
        >
          Pause
        </button>
        <button
          onClick={resumeTimer}
          className="rounded bg-green-500 px-4 py-2 text-white"
        >
          Resume
        </button>
      </div>
    </div>
  );
};

export default DigitalClock;
