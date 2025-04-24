/**
 * Utility functions for safely accessing browser APIs during server-side rendering
 */

// Safe window check
export const isBrowser = typeof window !== "undefined";

// Safe window access
export const getWindow = () => (isBrowser ? window : undefined);

// Safe document access
export const getDocument = () => (isBrowser ? document : undefined);

// Safe localStorage access
export const getLocalStorage = () => (isBrowser ? window.localStorage : null);

// Safe sessionStorage access
export const getSessionStorage = () =>
  isBrowser ? window.sessionStorage : null;

// Safe window dimension access
export const getWindowDimensions = () => {
  if (!isBrowser) return { width: 0, height: 0 };
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
};

// Safe scroll position
export const getScrollPosition = () => {
  if (!isBrowser) return { x: 0, y: 0 };
  return {
    x: window.scrollX || window.pageXOffset,
    y: window.scrollY || window.pageYOffset,
  };
};

// Safe event listener
export const safeAddEventListener = (target, event, handler, options) => {
  if (isBrowser && target) {
    target.addEventListener(event, handler, options);
    return () => target.removeEventListener(event, handler, options);
  }
  return () => {};
};

// Safe requestAnimationFrame
export const safeRequestAnimationFrame = (callback) => {
  if (isBrowser) {
    return window.requestAnimationFrame(callback);
  }
  return null;
};

// Safe cancelAnimationFrame
export const safeCancelAnimationFrame = (id) => {
  if (isBrowser && id !== null) {
    window.cancelAnimationFrame(id);
  }
};
