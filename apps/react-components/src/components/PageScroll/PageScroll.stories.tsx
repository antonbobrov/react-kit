import type { Meta, StoryFn } from '@storybook/react';
import React, { FC } from 'react';
import { times } from '@anton.bobrov/vevet-init';
import { PageScroll } from '.';

type TComponent = typeof PageScroll.Provider;

const meta: Meta<TComponent> = {
  title: 'Scroll/PageScroll',
  component: PageScroll.Provider,
};

export default meta;

const Components: FC = () => (
  <div>
    {times(
      (index) => (
        <div key={index}>Element</div>
      ),
      100,
    )}
  </div>
);

const Template: StoryFn<TComponent> = (props) => (
  <PageScroll.Provider {...props}>
    <PageScroll.ScrollBar />

    <PageScroll.SmoothContainer>
      <Components />
    </PageScroll.SmoothContainer>
  </PageScroll.Provider>
);

export const Default = Template.bind({});
Default.args = {};
