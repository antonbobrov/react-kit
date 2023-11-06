import { cloneElement, forwardRef } from 'react';
import { useEvent } from '@anton.bobrov/react-hooks';
import { TBasePopupAnchorRenderer } from './types';

export const Anchor: TBasePopupAnchorRenderer = forwardRef(
  ({ activate, deactivate, isActive, showEvent, anchor }, forwardedRef) => {
    const toggle = useEvent(() => {
      if (isActive) {
        deactivate();
      } else {
        activate();
      }
    });

    if (!anchor) {
      return null;
    }

    const props =
      showEvent === 'click'
        ? {
            onClick: (event: any) => {
              anchor.props.onClick?.(event);
              toggle();
            },
          }
        : {
            onMouseEnter: (event: any) => {
              anchor.props.onMouseEnter?.(event);
              activate();
            },
            onMouseLeave: (event: any) => {
              anchor.props.onMouseLeave?.(event);
              deactivate();
            },
            onFocus: (event: any) => {
              anchor.props.onFocus?.(event);
              activate();
            },
            onBlur: (event: any) => {
              anchor.props.onBlur?.(event);
              deactivate();
            },
          };

    return cloneElement(anchor, {
      ref: forwardedRef,
      ...props,
    });
  },
);

Anchor.displayName = 'Anchor';
