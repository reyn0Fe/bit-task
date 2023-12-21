import { useEffect } from "react";

export const useDisableScroll = (disableScroll: boolean) => {
  useEffect(() => {
    if (disableScroll) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "visible";
    }

    return () => {
      document.body.style.overflowY = "visible";
    };
  }, [disableScroll]);
};
