import React, { useState, useEffect } from 'react'

const LIR_START = new Date(2024, 1, 16, 20, 0, 0, 0);

const calculateMilisecondsLeft = () => LIR_START.getTime() - new Date().getTime();

const App = () => {
  const [milisecondsLeft, setMilisecondsLeft] = useState(calculateMilisecondsLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setMilisecondsLeft(calculateMilisecondsLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(milisecondsLeft / (24 * 60 * 60 * 1000));
  const daysms = milisecondsLeft % (24 * 60 * 60 * 1000);
  const hours = Math.floor(daysms / (60 * 60 * 1000));
  const hoursms = milisecondsLeft % (60 * 60 * 1000);
  const minutes = Math.floor(hoursms / (60 * 1000));
  const minutesms = milisecondsLeft % (60 * 1000);
  const sec = Math.floor(minutesms / 1000);

  return (
    <div className='w-screen h-screen flex justify-center items-center relative'>
      <img src='/bgImage.jpg' alt='Let it roll' className='w-full h-full object-cover absolute top-0 left-0' />
      <div className='bg-white bg-opacity-90 p-16 sm:p-24 lg:p-32 rounded-lg relative z-10'>
        <p className='text-4xl sm:text-6xl lg:text-9xl font-bold'>
          {days}
          :{hours < 10 ? `0${hours}` : hours}
          :{minutes < 10 ? `0${minutes}` : minutes}
          :{sec < 10 ? `0${sec}` : sec}
        </p>
      </div>
      <a href='https://www.facebook.com/events/1250685672298851' className='absolute top-0 left-0 w-screen h-screen z-20'></a>
    </div>
  )
}

export default App