import { useState, useEffect } from "react";

export default function Ellipsis() {
  const [ellipsis, setEllipsis] = useState('');

  function increaseEllipsis() {
    setEllipsis((prev) => {
      if (prev === '...') {
        return '';
      }
      return prev + '.';
    });
  }

  useEffect(() => {
    const time = setInterval(increaseEllipsis, 750); 
    return () => clearInterval(time); 
  }, []); 

  return <p className="ellipsis">{ellipsis}</p>;
}
