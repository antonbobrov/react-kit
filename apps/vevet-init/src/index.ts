import { Application, NApplication } from 'vevet';

type TProps = Omit<NApplication.Prop, 'prefix'>;

const defaultProps: Required<TProps> = {
  sayHi: true,
  tablet: 1199,
  phone: 899,
  viewportResizeTimeout: 30,
  easing: [0.25, 0.1, 0.25, 1],
  webpSupport: true,
};

const overrideProps =
  typeof window !== 'undefined' && 'vevetProps' in window
    ? window.vevetProps
    : {};

const props = { ...defaultProps, ...overrideProps };
declare global {
  interface Window {
    vevetProps: Partial<TProps>;
  }
}

export const vevet = (
  typeof window !== 'undefined'
    ? new Application({ ...props, prefix: 'v-' })
    : undefined
) as Application;

export * from 'vevet';
