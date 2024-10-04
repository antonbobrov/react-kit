import { useBreakpointName } from './useBreakpointName';

export function useIsViewportPhone() {
  const breakpointName = useBreakpointName();

  return breakpointName === 'phone';
}
