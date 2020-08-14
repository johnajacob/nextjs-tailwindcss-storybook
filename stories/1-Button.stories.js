import React from 'react'
import { action } from '@storybook/addon-actions'
import Button from '../components/Button/button'

export default {
  title: 'Button',
  component: Button,
  parameters: {
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'blue', value: '#00f' },
        { name: 'dark', value: '#0f0f0f' },
      ],
    },
  },
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = { label: 'Button' }

export const Secondary = Template.bind({})
Secondary.args = { ...Primary.args, label: '😄👍😍💯' }
