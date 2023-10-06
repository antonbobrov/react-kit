import type { Meta, StoryFn } from '@storybook/react';
import React, { FC, PropsWithChildren } from 'react';
import { PageCursor } from '.';

type TComponent = typeof PageCursor.Provider;

const meta: Meta<TComponent> = {
  title: 'Cursor/PageCursor',
  component: PageCursor.Provider,
  tags: ['autodocs'],
  args: {
    cursors: [],
    width: 100,
    height: 100,
  },
};

export default meta;

const StyledCursorBlock: FC<PropsWithChildren> = ({ children }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 'var(--cursor-w)',
      height: 'var(--cursor-h)',
      borderRadius: '50%',
      background: '#000',
      color: '#fff',
      textAlign: 'center',
    }}
  >
    {children}
  </div>
);

const Template: StoryFn<TComponent> = ({ children, cursors, ...props }) => (
  <PageCursor.Provider
    {...props}
    cursors={[
      ...cursors,
      <PageCursor.Type key={1} type="first">
        <StyledCursorBlock>first cursor</StyledCursorBlock>
      </PageCursor.Type>,

      <PageCursor.Type key={2} type="second">
        <StyledCursorBlock>second cursor</StyledCursorBlock>
      </PageCursor.Type>,

      <PageCursor.Type key={3} type="inner">
        <StyledCursorBlock> inner cursor</StyledCursorBlock>
      </PageCursor.Type>,
    ]}
  >
    <PageCursor.Target type="first">
      <div
        style={{
          width: 200,
          height: 200,
          backgroundColor: '#ccc',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        First cursor area
      </div>
    </PageCursor.Target>

    <br />
    <br />

    <PageCursor.Target type="second">
      <div
        style={{
          width: 200,
          height: 200,
          backgroundColor: '#ccc',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <PageCursor.Target type="inner" width={150} height={150}>
          <div
            style={{
              width: 100,
              height: 100,
              backgroundColor: '#f0f',
            }}
          />
        </PageCursor.Target>
      </div>
    </PageCursor.Target>

    {children}
  </PageCursor.Provider>
);

export const WithDefault = Template.bind({});
WithDefault.args = {
  cursors: [
    <PageCursor.Type key={0} type="default">
      <StyledCursorBlock>default cursor</StyledCursorBlock>
    </PageCursor.Type>,
  ],
};

export const WithoutDefault = Template.bind({});
WithoutDefault.args = {};
