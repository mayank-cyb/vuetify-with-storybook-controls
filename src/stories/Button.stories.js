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
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info'],
    },
    onClick: { action: 'button clicked' },
    size: {
      control: {
        type: 'select',
      },
      options: ['small', 'large'],
    },
    tooltip: {
      control: {
        showTooltip: true,
        location: 'bottom', //possible locations are "top", "bottom", "start", "end"
        label: "Tooltip",
        type: 'popOver',  // possible tooltip types are "tooltip", "popOver"
        hasTitle: true,
        popoverTitle: "Popover title",
        popoverText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      }
    },
    // popOver: {
    //   showPopover: {if: {arg: 'tooltip.control.showTooltip' , truthy: false }},
    //   hasTitle:  true,
    //   title: "Popover Title",
    //   label: "Popover label"
    // }
  },
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Button = {
  args: {
    label: 'Button',
    btnType: 'primary',
    tooltip: {
      showTooltip: true,
      location: 'bottom', 
      label: "Tooltip",
      type: 'popOver',
      hasTitle: true,
      popoverTitle: "Popover title",
      popoverText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    
  },
};


 // possible tooltip types are "tooltip", "popOver"