import { useState } from "react";

const useError = (initialErrorMsg: string | null, timeoutMs: number) => {
  const [error, setErrorMsg] = useState<string | null>(initialErrorMsg);
  const [timeoutId, setTimeoutId] = useState<number | undefined>(undefined);

  const setError = (newErrorMessage: string | null) => {
    // Clear previous time-out, if there is one
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    // If there's a new errorMessage: set it, and set a new timeout to clear it
    if (newErrorMessage) {
      setErrorMsg(newErrorMessage);
      const id = setTimeout(() => {
        setErrorMsg(null);
      }, timeoutMs);
      setTimeoutId(id);
    }
  };

  return { error, setError };
};

export default useError;
