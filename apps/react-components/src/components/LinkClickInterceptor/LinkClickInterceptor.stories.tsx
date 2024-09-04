import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { LinkClickInterceptor } from '.';

type TComponent = typeof LinkClickInterceptor;

const meta: Meta<TComponent> = {
  title: 'Elements/LinkClickInterceptor',
  component: LinkClickInterceptor,
  tags: ['autodocs'],
  args: {
    children: (
      <>
        <a href="https://google.com/">External link</a>

        <br />

        <a href="https://google.com/" target="_blank" rel="noreferrer">
          External link with target
        </a>

        <br />

        <a href="/" download>
          Download
        </a>

        <br />

        <a href="/">Interal link</a>

        <br />

        <a href="#hash">Link with hash</a>

        <br />

        <a href="/">
          <span>Link with children</span>
        </a>

        <br />

        <a href="/" data-framework-link="">
          <span>Framework link</span>
        </a>
      </>
    ),
    onExternalClick: (event, element) => {
      event.preventDefault();

      // eslint-disable-next-line no-alert
      alert(`external link ${element.href}`);
    },
    onInternalClick: (event, element) => {
      event.preventDefault();

      // eslint-disable-next-line no-alert
      alert(`internal link ${element.href}`);
    },
  },
};

export default meta;

export const Default: StoryObj<TComponent> = {};
