import { useState, useEffect } from "react";

function Time() {
  const [date, setDate] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <h2>{time}</h2>;
}

export default Time;
