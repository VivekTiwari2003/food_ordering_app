import React, { useEffect, useState } from 'react';
import { PropagateLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';
import { useWindowSize } from '@react-hook/window-size';

function Success() {
  const [loading, setLoading] = useState(true);
  const [showConfetti, setShowConfetti] = useState(false);
  const navigate = useNavigate();
  const [width, height] = useWindowSize(); // for confetti size

  useEffect(() => {
    // Step 1: Stop loading after 3 sec
    const timer1 = setTimeout(() => {
      setLoading(false);
      setShowConfetti(true); // Show confetti

      // Step 2: Redirect after 3 sec of success message
      const timer2 = setTimeout(() => {
        navigate("/");
      }, 5000);

      return () => clearTimeout(timer2);
    }, 3000);

    return () => clearTimeout(timer1);
  }, [navigate]);

  return (
    <div className={`flex flex-col items-center justify-center h-screen transition-all duration-500 ${!loading ? 'bg-green-400' : ''}`}>
      {
        loading ? (
          <PropagateLoader color='#36d7b7' />
        ) : (
          <>
            {showConfetti && <Confetti width={width} height={height} />}
            <div className='text-white text-center'>
              <h2 className='text-4xl font-bold mb-4'>🎉 Order Successful! 🎉</h2>
              <p className='text-lg'>Your order has been successfully placed</p>
            </div>
          </>
        )
      }
    </div>
  );
}

export default Success;
