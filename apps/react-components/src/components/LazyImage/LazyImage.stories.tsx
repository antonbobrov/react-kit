import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { LazyImage } from '.';

type TComponent = typeof LazyImage;

const meta: Meta<TComponent> = {
  title: 'Image/LazyImage',
  component: LazyImage,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ position: 'relative', width: 200, height: 200 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

export const WithAlpha: StoryObj<TComponent> = {
  args: {
    src: './image/image.jpg',
    hasAlpha: true,
  },
};

export const WithoutAlpha: StoryObj<TComponent> = {
  args: {
    src: './image/image.jpg',
    hasAlpha: false,
  },
};

export const WithEager: StoryObj<TComponent> = {
  args: {
    src: './image/image.jpg',
    loading: 'eager',
  },
};

export const WithAdaptivePaths: StoryObj<TComponent> = {
  args: {
    paths: {
      original: '',
      thumb: './image/image.jpg',
      thumbWebp: './image/image.webp',
      sizes: {
        640: './image/640.png',
        750: './image/750.png',
        1024: './image/1024.png',
        1440: './image/1440.png',
        1920: './image/1920.png',
        2560: './image/2560.png',
      },
      sizesWebp: {
        640: './image/640.webp',
        750: './image/750.webp',
        1024: './image/1024.webp',
        1440: './image/1440.webp',
        1920: './image/1920.webp',
        2560: './image/2560.webp',
      },
      alt: 'adaptive image',
    },
  },
};
