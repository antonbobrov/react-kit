import type { GUI } from 'dat.gui';

const isBrowser = typeof window !== 'undefined';

declare global {
  interface Window {
    USE_DAT_GUI?: boolean;
    OPEN_DAT_GUI?: boolean;
  }
}

/** dat.gui instance */
export const datGUI = new Promise((resolve: (arg: GUI | null) => void) => {
  if (!isBrowser) {
    resolve(null);

    return;
  }

  const canUseGUI = 'USE_DAT_GUI' in window ? window.USE_DAT_GUI : true;

  if (!canUseGUI) {
    resolve(null);

    return;
  }

  import('dat.gui')
    .then((module) => {
      const instance = new module.GUI({
        closed:
          typeof window.OPEN_DAT_GUI === 'boolean'
            ? !window.OPEN_DAT_GUI
            : true,
      });

      const style = document.createElement('style');
      style.innerHTML = '.dg.ac { z-index: 999 !important; }';
      document.body.appendChild(style);

      resolve(instance);
    })
    .catch(() => {});
});

export type { GUI };
