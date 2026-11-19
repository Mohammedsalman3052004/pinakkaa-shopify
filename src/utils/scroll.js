/**
 * Pinakkaa Global Smooth Scroll Utility
 * Uses Lenis when initialized, with an accurate -75px offset to perfectly frame sections below the floating capsule navbar
 */
export function smoothScrollTo(target, offset = -75) {
  if (typeof window === 'undefined') return;

  const targetSelector = typeof target === 'string' ? target : null;
  const targetEl = targetSelector ? document.querySelector(targetSelector) : target;

  if (!targetEl && targetSelector !== 'top') {
    console.warn(`smoothScrollTo: Target not found: ${target}`);
    return;
  }

  // If Lenis is active on window
  if (window.__lenis) {
    window.__lenis.scrollTo(targetEl || target, {
      offset: offset,
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    });
    return;
  }

  // Fallback to native smooth scroll with offset
  if (targetEl) {
    const elementPosition = targetEl.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset + offset;
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}
