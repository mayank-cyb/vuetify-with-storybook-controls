import MyButton from './Button.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Example/Button',
  component: MyButton,
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
      options: ['primary', 'secondary', 'success', 'warning', 'danger'],
    },
    onClick: {},
    size: {
      control: {
        type: 'select',
      },
      options: ['small', 'medium', 'large'],
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: 'Primary',
    btnType: 'primary'
  },
};

export const Secondary = {
  args: {
    label: 'Secondary',
    btnType: 'secondary' 
  }
};

export const Success = {
  args: {
    label: 'Success',
    btnType: 'success'
  },
};

export const Warning = {
  args: {
    label: 'Warning',
    btnType: 'warning'
  },
};

export const Danger = {
  args: {
    label: 'Danger',
    btnType: 'danger'
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
