import { useEffect, useState } from "react";

export default function useScrollTop() {
  const [scrollTop, setScrollTop] = useState(0);
  let onScroll;
  useEffect(() => {
    onScroll = (e) => setScrollTop(e.target.scrollTop);
  }, []);
  return [scrollTop, { onScroll }];
}
