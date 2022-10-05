import { useEffect, useRef, useState } from "react";

export function useExpand(dom = "button", initialState) {
  const nodeRef = useRef(null);
  const [expandNavigation, setExpandNavigation] = useState(initialState);
  useEffect(() => {
    function handleExpandNavigation(e) {
      if (
        nodeRef &&
        !nodeRef.current.contains(e.target) &&
        !e.target.matches(dom)
      ) {
        setExpandNavigation(false);
      }
    }
    document.addEventListener("click", handleExpandNavigation);
    return () => {
      document.removeEventListener("click", handleExpandNavigation);
    };
  }, [dom]);
  return {
    expandNavigation,
    setExpandNavigation,
    nodeRef,
  };
}
