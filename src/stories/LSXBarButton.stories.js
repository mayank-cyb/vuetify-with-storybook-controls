import BarButton from './LSXBarButton.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Example/BarButton',
  component: BarButton,
  tags: ['autodocs'],
  argTypes: {
    btnType: {
        control: {
          type: 'select',
        },
        options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info'],
    },
    onClick: { action: 'button clicked' },
    imgPath: {
        control: {
            type: 'select',
        },
        options: [
            "src/assets/Small-Arrow-Up-Icon.svg",
            "src/assets/Small-Arrow-Dwn-Icon.svg",
        ],
      }
    },
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Button = {
  args: {
    label: 'Button',
    btnType: 'primary',
    imgPath: 'src/assets/Small-Arrow-Dwn-Icon.svg'
  },
};