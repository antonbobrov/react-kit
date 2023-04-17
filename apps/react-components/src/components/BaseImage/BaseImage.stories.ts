import type { Meta, StoryObj } from '@storybook/react';
import { BaseImage } from '.';

type TComponent = typeof BaseImage;

const meta: Meta<TComponent> = {
  title: 'Image/BaseImage',
  component: BaseImage,
  tags: ['autodocs'],
};

export default meta;

export const WithSrc: StoryObj<TComponent> = {
  args: {
    src: './image/image.jpg',
    width: 200,
    alt: 'simple image',
  },
};

export const WithSrcSet: StoryObj<TComponent> = {
  args: {
    srcSet: './image/image.jpg, ./image/640.png 640w, ./image/1920.png 1920w',
    width: 200,
    alt: 'image with srcset',
  },
};

export const WithPaths: StoryObj<TComponent> = {
  args: {
    paths: {
      original: '',
      thumb: './image/image.jpg',
      thumbWebp: './image/image.webp',
      width: 200,
      alt: 'image with paths',
    },
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
      width: 200,
      alt: 'adaptive image',
    },
  },
};
