// hooks/useBodyScrollLock.ts
import { useEffect } from "react";

/**
 * Custom hook to lock body scrolling when a modal or sidebar is open.
 * @param isLocked - Boolean flag indicating if the scroll should be disabled.
 */
export const useBodyScrollLock = (isLocked: boolean): void => {
  useEffect(() => {
    if (isLocked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Clean up when the calling component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLocked]);
};
