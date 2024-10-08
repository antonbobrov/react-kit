import { useBreakpointName } from './useBreakpointName';

/**
 * Custom React hook that checks if the current viewport breakpoint is 'phone'.
 *
 * @example
 * const MyComponent = () => {
 *   const isPhone = useIsViewportPhone();
 *
 *   return (
 *     <div>
 *       {isPhone ? 'Viewport is of phone size.' : 'Not phone.'}
 *     </div>
 *   );
 * };
 */
export function useIsViewportPhone() {
  const breakpointName = useBreakpointName();

  return breakpointName === 'phone';
}
