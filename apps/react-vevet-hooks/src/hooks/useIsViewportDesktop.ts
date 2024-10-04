import { useBreakpointName } from './useBreakpointName';

export function useIsViewportDesktop() {
  const breakpointName = useBreakpointName();

  return breakpointName === 'desktop';
}
