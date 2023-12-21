import { useEffect, useState } from "react";

export const useSimplePromise = <D = unknown>(callback: () => Promise<D>) => {
  const [data, setData] = useState<D | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    callback()
      .then((d) => setData(d))
      .finally(() => setIsLoading(false));
  }, [callback]);

  return {
    data,
    isLoading,
  };
};
