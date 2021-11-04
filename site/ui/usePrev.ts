import { useRef, useEffect } from "react";

/**
 * Returns the previous value of a reference after a component update.
 *
 * @param value
 */
export function usePrev<T = any>(value: T) {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}
