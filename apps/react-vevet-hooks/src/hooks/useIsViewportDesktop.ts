import { useBreakpointName } from './useBreakpointName';

/**
 * Custom React hook that checks if the current viewport breakpoint is 'desktop'.
 *
 * @example
 * const MyComponent = () => {
 *   const isDesktop = useIsViewportDesktop();
 *
 *   return (
 *     <div>
 *       {isDesktop ? 'Viewport is of desktop size.' : 'Not desktop'}
 *     </div>
 *   );
 * };
 */
export function useIsViewportDesktop() {
  const breakpointName = useBreakpointName();

  return breakpointName === 'desktop';
}
