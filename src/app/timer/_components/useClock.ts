import { useEffect, useState } from "react";

interface Time {
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
}

export const useDigitalClock = () => {
  const [time, setTime] = useState<Time>({
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime({
        hours: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds(),
        milliseconds: now.getMilliseconds(),
      });
    };

    const interval = setInterval(updateTime, 1); // Update every millisecond

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  // Function to format time with leading zeros
  const formatTime = (unit: number, padLength = 2): string =>
    String(unit).padStart(padLength, "0");

  return { time, formatTime };
};
