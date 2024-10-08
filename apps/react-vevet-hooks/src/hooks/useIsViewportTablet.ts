import { useBreakpointName } from './useBreakpointName';

/**
 * Custom React hook that checks if the current viewport breakpoint is 'tablet'.
 *
 * @example
 * const MyComponent = () => {
 *   const isTablet = useIsViewportTablet();
 *
 *   return (
 *     <div>
 *       {isTablet ? 'Viewport is of tablet size.' : 'Not tablet.'}
 *     </div>
 *   );
 * };
 */
export function useIsViewportTablet() {
  const breakpointName = useBreakpointName();

  return breakpointName === 'tablet';
}
