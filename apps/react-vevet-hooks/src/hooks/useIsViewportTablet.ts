import { useBreakpointName } from './useBreakpointName';

export function useIsViewportTablet() {
  const breakpointName = useBreakpointName();

  return breakpointName === 'tablet';
}
