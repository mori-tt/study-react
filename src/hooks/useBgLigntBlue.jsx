import { useEffect } from "react";

export const useBgLigntBlue = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
};
