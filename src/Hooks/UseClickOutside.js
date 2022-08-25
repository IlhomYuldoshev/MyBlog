import {useEffect} from "react";

const useClickOutside = (ref, callback) => {
  const handleClick = e => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    const clear = setTimeout(() => {
      document.addEventListener('click', handleClick);
    }, 0)
    return () => {
      document.removeEventListener('click', handleClick);
      clearInterval(clear);
    };
  });
};

export default useClickOutside;

