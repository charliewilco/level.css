import { useCallback, useState } from "react";

export function useForceUpdate() {
  let [, dispatch] = useState<{}>(Object.create(null));
  return useCallback(() => {
    dispatch(Object.create(null));
  }, []);
}
