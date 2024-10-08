import type { GUI } from 'dat.gui';

const isBrowser = typeof window !== 'undefined';

declare global {
  interface Window {
    USE_DAT_GUI?: boolean;
    OPEN_DAT_GUI?: boolean;
  }
}

/**
 * Creates a dat.GUI instance for use in the browser.
 * It checks for the availability of the `dat.gui` library and global window flags (`USE_DAT_GUI` and `OPEN_DAT_GUI`) to conditionally load the GUI.
 *
 * @example
 *
 * datGUI.then((gui) => {
 *   if (gui) {
 *     // use dat.gui
 *   }
 * });
 */
export const datGUI = new Promise((resolve: (arg: GUI | null) => void) => {
  if (!isBrowser) {
    resolve(null);

    return;
  }

  // Check if dat.GUI should be used, default is true if not specified
  const canUseGUI = 'USE_DAT_GUI' in window ? window.USE_DAT_GUI : true;

  if (!canUseGUI) {
    resolve(null);

    return;
  }

  // Dynamically import 'dat.gui' only if allowed
  import('dat.gui')
    .then((module) => {
      const instance = new module.GUI({
        closed:
          typeof window.OPEN_DAT_GUI === 'boolean'
            ? !window.OPEN_DAT_GUI
            : true, // Default to closed if no flag is set
      });

      // Add z-index styling to ensure the GUI stays above other elements
      const style = document.createElement('style');
      style.innerHTML = '.dg.ac { z-index: 999 !important; }';
      document.body.appendChild(style);

      resolve(instance);
    })
    .catch(() => {
      resolve(null);
    });
});

export type { GUI };
