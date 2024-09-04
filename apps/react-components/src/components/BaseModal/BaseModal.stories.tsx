import type { Meta, StoryFn } from '@storybook/react';
import { usePropState } from '@anton.bobrov/react-hooks';
import React from 'react';
import { BaseModal } from '.';

type TComponent = typeof BaseModal;

const meta: Meta<TComponent> = {
  title: 'Modals/BaseModal',
  component: BaseModal,
  tags: ['autodocs'],
  args: {
    children: (
      <>
        <p>Some text</p>

        <input type="text" placeholder="Some text" />

        <button type="button">Some button</button>
      </>
    ),
  },
};

export default meta;

const Template: StoryFn<TComponent> = ({
  isOpen: isOpenProp,
  children,
  ...props
}) => {
  const [isOpen, setIsOpen] = usePropState(isOpenProp);

  return (
    <>
      <BaseModal {...props} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {children}
      </BaseModal>

      <button type="button" onClick={() => setIsOpen(true)}>
        Open modal
      </button>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
