import { useEffect, useState } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formatTime = () =>{
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridian = hours >= 12 ? "PM": "AM";

    hours = hours%12 || 12;

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridian}`;
  }

  const padZero = (num) =>{
    return (num < 10 ? "0": "")+ num;
  }

  return (
    <>
      <div className="clock-container">
        <div className="clock">
          <span>{formatTime()}</span>
        </div>
      </div>
    </>
  );
};

export default DigitalClock;
