import { useEffect, useState } from "react";

export default function useComputed<T, K>(initial: T, watch: K, callback: () => T): T {
  const [state, setState] = useState<T>(initial);

  useEffect(() => {
    setState(callback);
  }, [watch, callback]);

  return state;
}
