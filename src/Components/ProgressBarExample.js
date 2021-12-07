import { useEffect, useState } from 'react';

function ProgressBarExample() {
  const [numero, setNumero] = useState(0);

  useEffect(() => {
    if (numero < 50) {
      setTimeout(() => setNumero(numero +10), 1000);
    } 
  });

  return (
    <div className="App">
      <div>
        <progress value={numero} max="100"/>
      </div>
    </div>
  );
}

export default ProgressBarExample