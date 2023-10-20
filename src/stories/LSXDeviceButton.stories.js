import DeviceButton from './LSXDeviceButton.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Atoms/LSXDeviceButton',
  component: DeviceButton,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'button clicked' },
    btnType: {
      control: {
          type: 'select',
        },
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info'],
    },
    image: {
      control: {
        type: "select",
      },
      options: [
        "src/assets/devices/DL650.png",
        "src/assets/devices/CX3240.png",
        "src/assets/devices/P6000.png",
        "src/assets/devices/FF680.png",
        "src/assets/devices/USB.png",
        "src/assets/devices/CDDVD.png",
      ],
    },

  },
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Button = {
  args: {
    label: 'Button',
    btnType: 'primary',
    image: 'rc/assets/devices/DL650.png'
  },
};

