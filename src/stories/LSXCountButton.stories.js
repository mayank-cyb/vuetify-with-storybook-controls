import CountButton from './LSXCountButton.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Atoms/OrderButton',
  component: CountButton,
  tags: ['autodocs'],
  argTypes: {
    orderCount: {
      control: {
        type: 'number',
        min: 0,
        max: 100,
        step: 1,
      },
    },
    onClick: { action: 'button clicked' },
    btnType: {
      control: {
          type: 'select',
        },
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info'],
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

