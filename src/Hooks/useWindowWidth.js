import {useLayoutEffect, useState} from "react";

const useWindowWidth = () => {
  const [width, setWidth] = useState(500);

  useLayoutEffect(() => {
    const handleWidth = () => {
      const {innerWidth} = window;
      setWidth(innerWidth);
    }
    // Birinchi martasida set qilish uchun
    handleWidth();

    // resize qilsa ozgartirib turish uchun
    window.addEventListener("resize", handleWidth);
    return () => {
      window.removeEventListener("resize", handleWidth);
    }
  }, [])

  return [width]
}

export default useWindowWidth;
