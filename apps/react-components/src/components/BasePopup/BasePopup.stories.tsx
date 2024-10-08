import type { Meta, StoryFn } from '@storybook/react';
import React, { forwardRef, useRef } from 'react';
import { BasePopup, TBasePopupAnchorRenderer } from '.';

type TComponent = typeof BasePopup;

const meta: Meta<TComponent> = {
  title: 'Popups/BasePopup',
  component: BasePopup,
  tags: ['autodocs'],
  args: {},
};

export default meta;

const Template: StoryFn<TComponent> = ({
  children,
  anchor: anchorProp,
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      style={{
        padding: '100px',
        background: '#ccc',
      }}
    >
      <div
        ref={containerRef}
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',

          width: '100%',
          height: '1000px',

          background: '#f0f0f0',
        }}
      >
        <BasePopup
          {...props}
          viewportRef={containerRef}
          anchor={
            anchorProp === null ? null : (
              <button type="button">Show popup</button>
            )
          }
          style={{
            backgroundColor: '#333',
            color: '#fff',
            width: '100vw',
            textAlign: 'center',
          }}
        >
          lorem ipsum
        </BasePopup>
      </div>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  gap: 10,
  viewportGap: 5,
};

const AnchorRenderer: TBasePopupAnchorRenderer = forwardRef(
  ({ activate, deactivate, isActive }, forwardedRef) => (
    <button
      ref={forwardedRef}
      type="button"
      onMouseEnter={activate}
      onMouseLeave={deactivate}
    >
      custom button / {isActive ? 'active' : 'not active'}
    </button>
  ),
);

AnchorRenderer.displayName = 'AnchorRenderer';

export const WithCustomAnchor = Template.bind({});
WithCustomAnchor.args = {
  anchor: null,
  renderAnchor: AnchorRenderer,
};

export const WithLifetine = Template.bind({});
WithLifetine.args = {
  lifetime: 3000,
};
