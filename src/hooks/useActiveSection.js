import { useEffect, useState } from "react";

export default function useActiveSection(ids) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        // 140px = just below the 80px navbar; the last section to pass it wins
        if (el && el.getBoundingClientRect().top <= 140) current = id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [ids]);

  return active;
}