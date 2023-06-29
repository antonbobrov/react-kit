import type { Meta, StoryFn } from '@storybook/react';
import { usePropState } from '@anton.bobrov/react-hooks';
import React from 'react';
import { BaseVideoModal } from '.';
import { ModalAnchor } from '../ModalAnchor';

type TComponent = typeof BaseVideoModal;

const meta: Meta<TComponent> = {
  title: 'Modals/BaseVideoModal',
  component: BaseVideoModal,
  tags: ['autodocs'],
  args: {
    player: {
      source: 'mp4',
      src: './video/video.mp4',
    },
  },
};

export default meta;

const Template: StoryFn<TComponent> = ({ isOpen: isOpenProp, ...props }) => {
  const [isOpen, setIsOpen] = usePropState(isOpenProp);

  return (
    <>
      <BaseVideoModal
        {...props}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />

      <button type="button" onClick={() => setIsOpen(true)}>
        Open modal
      </button>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};

const TemplateWithAnchor: StoryFn<TComponent> = ({ player }) => (
  <ModalAnchor
    anchor={<button type="button">Open modal</button>}
    modal={BaseVideoModal}
    modalProps={{
      player,
    }}
  />
);

export const WithAnchor = TemplateWithAnchor.bind({});
Default.args = {};
