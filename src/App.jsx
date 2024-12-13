import { useRef, useState, useEffect } from "react";
import "./App.css";

function App() {
  const text = useRef(null);
  const [time, setTim] = useState(0);

  return (
    <>
      <input ref={text} type="number" />
      <button
        onClick={() => {
          let time = text.current.value;
          setTim(time);

          const interValId = setInterval(() => {
            setTim((num) => {
              if (num <= 0) {
                clearInterval(interValId);
                return 0;
              }
              return --num
            });
          }, 1000);
        }}
      >
        boshlash
      </button>
      <p>{time}</p>
    </>
  );
}

export default App;
