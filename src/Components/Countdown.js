import { useEffect, useState } from 'react';

function Countdown() {
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setSeconds('BOOOOM!');
    }
  });

  return (
    <div className="App">
      <div>
        {seconds}
      </div>
    </div>
  );
}

export default Countdown