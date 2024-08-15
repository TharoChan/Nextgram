import { useCallback, useEffect, useState } from "react";
import { useTimer } from "react-use-precision-timer";

interface Time {
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
}

export const useTest= () => {
  const [time, setTime] = useState<Time>({
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  });

  const callback = useCallback(() => {
    console.log("Boom");
    // Update the time here instead of using a separate interval
    const now = new Date();
    setTime({
      hours: now.getHours(),
      minutes: now.getMinutes(),
      seconds: now.getSeconds(),
      milliseconds: now.getMilliseconds(),
    });
  }, []);

  const timer = useTimer({ delay: 1 }, callback);

  useEffect(() => {
    timer.start();
    return () => timer.stop();
  }, [timer]);

  const formatTime = (unit: number, padLength = 2): string =>
    String(unit).padStart(padLength, "0");

  const stopTimer = () => {
    timer.stop();
  };

  const pauseTimer = () => {
    timer.pause();
  };

  const resumeTimer = () => {
    timer.resume();
  };

  return { time, formatTime, stopTimer, pauseTimer, resumeTimer };
};