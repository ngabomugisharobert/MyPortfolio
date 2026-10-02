import { useEffect, useState } from "react";

export function useStartAnimation() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);

  return animated;
}
