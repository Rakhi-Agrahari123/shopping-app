import React, { useState } from 'react';
import { useEffect } from 'react';
function TopStrip() {
  const [showSecondMsg, setShowSecondMsg] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowSecondMsg((prev) => !prev);
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-black font-thin  text-white text-center tracking-wider py-2">
      {showSecondMsg ? (
        <p className='font-serif font-extrabold '>End of Season Sale!</p>
      ) : (
        <p className='font-serif font-semibold'>Get 30% off on your first order use code : <span>'FIRST30'</span></p>
      )}
    </div>
  );
}

export default TopStrip;