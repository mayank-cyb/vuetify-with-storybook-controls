import BarButton from './LSXBarButton.vue';
import { action } from '@storybook/addon-actions';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Example/BarButton',
  component: BarButton,
  tags: ['autodocs'],
  argTypes: {
    appearance: {
      control: {
        type: 'select',
      },
      options: ['default', 'outline'],
    },
    btnType: {
      control: {
          type: 'select',
        },
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info'],
    },
    onClick: { action: 'button clicked' },
    size: {
      control: {
        type: 'select',
      },
      options: ['small', 'large'],
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Button = {
  args: {
    label: 'Button',
    btnType: 'primary',
    options: 'large',
  },
};