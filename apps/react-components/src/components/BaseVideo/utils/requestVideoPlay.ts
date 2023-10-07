import {
  PCancelable,
  normalizedTimeoutCallback,
} from '@anton.bobrov/vevet-init';

/**
 * Request video play.
 * A cancelable promise that will try to play the video until success
 */
export const requestVideoPlay = (video: HTMLVideoElement) => {
  let timeout: ReturnType<typeof normalizedTimeoutCallback> | undefined;

  const play = () =>
    new PCancelable<void>((resolve) => {
      video
        .play()
        .then(resolve)
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        .catch(() => playWithTimeout(resolve));
    });

  const playWithTimeout = (callback: () => void) => {
    timeout?.clear();

    timeout = normalizedTimeoutCallback(() => {
      play()
        // eslint-disable-next-line promise/no-callback-in-promise
        ?.then(callback)
        .catch(() => {});
    }, 30);
  };

  return play();
};
