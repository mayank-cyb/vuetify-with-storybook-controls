import MyButton from './Button.vue';
import Tooltip from './FSSDTooltip.vue';
import * as TooltipStory from './FSSDTooltip.stories';


// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Atoms/Button',
  component: MyButton,
  tags: ['autodocs'],
  decorators: [() => ({ template: '<div><story/></div>' })],
  argTypes: {
    // label: {
    //   control: { type: 'string'},
    // },
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
    showTooltip: {
      control: {
        type: 'boolean'
      },
    },
    tooltip: {
      control: { type: 'object' },
        location: 'bottom', //possible locations are "top", "bottom", "start", "end"
        label: "Tooltip",
        tooltipType: 'popover',  // possible tooltip types are "tooltip", "popover"
        hasTitle: true,
        popoverTitle: "Popover title",
        popoverText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    }
  },
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Button = {
  // render: () => ({
  //   components: { MyButton, Tooltip },
  //   template: '<MyButton v-bind="$props"><Tooltip v-bind="$props" /></MyButton>'
  // }),
  args: {
    label: 'Button',
    btnType: 'primary',
    // tooltip: {
    //   location: { ...TooltipStory.Tooltip.args, location: "top" },
    //   //label: { ...TooltipStory.Tooltip.args, label: "Tooltip" },
    //   tooltipType: { ...TooltipStory.Tooltip.args, tooltipType: "popover" },
    //   hasTitle: { ...TooltipStory.Tooltip.args, hasTitle: "popover" },
    //   popoverTitle: { ...TooltipStory.Tooltip.args, popoverTitle: "Popover title" },
    //   popoverText: { ...TooltipStory.Tooltip.args, popoverText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    // },
    tooltip: {
      location: 'bottom', //possible locations are "top", "bottom", "start", "end"
      label: "Tooltip",
      tooltipType: 'popover',  // possible tooltip types are "tooltip", "popOver"
      hasTitle: true,
      popoverTitle: "Popover title",
      popoverText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    }
  },
};


 // possible tooltip types are "tooltip", "popOver"