import { isBrowser } from './isBrowser';

/**
 * A boolean constant that indicates whether the code is being executed in a server environment.
 */
export const isServer = !isBrowser;
