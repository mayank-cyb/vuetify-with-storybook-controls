import CircularButton from './CircularButton.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Example/CircleButton',
  component: CircularButton,
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
      options: ['small', 'medium', 'large'],
    },
    prependIcon: {
      control: {
        type: 'select'
      }, 
      options: ['', 'mdi-check-circle', 'mdi-account-circle'],
    },
    appendIcon: {
      control: {
        type: 'select'
      },
      options: ['', 'mdi-calendar', 'mdi-clock', "src/stories/assets/Arrow-Up-Icon.svg", "src/stories/assets/Arrow-Down-Icon.svg"],
    },
    image: 'src/assets/Top-Nav-Bell.svg'
  },
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Button = {
  args: {
    primary: true,
    label: '',
    btnType: 'primary',
    options: 'large',
    prependIcon: '',
    appendIcon: '',
    image: 'src/assets/Top-Nav-Bell.svg'
  },
};
