import { useEffect, useState } from "react";
import { initMockData } from "@shared";

let _initCompleted = false;

export const useInitApp = () => {
  const [isReady, setIsReady] = useState(_initCompleted);

  useEffect(() => {
    if (!_initCompleted) {
      initMockData()
        .catch((e) => console.error("ERROR DURING DEXIE POPULATE", e))
        .finally(() => {
          _initCompleted = true;
          setIsReady(true);
        });
    }
  }, []);

  return isReady;
};
