import Button from '.';
import type {ButtonProps} from '.';
import React from 'react';
import type {StoryFn} from '@storybook/react'

export default {
    title: 'Components / Button',
    component: Button,
}

export const Primary: StoryFn<ButtonsProps> = args => (
  <Button label={args.label} disabled={args.disabled} size={args.size} kind="primary"/>
)

Primary.args = {
  label: 'Subscribe',
  disabled: false,
  size: 'small',
}

