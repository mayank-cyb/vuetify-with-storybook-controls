import FssdTooltip from './FSSDTooltip.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Atoms/Tooltip',
  component: FssdTooltip,
  tags: ['autodocs'],
  decorators: [() => ({ template: '<div style="margin: 3em;"><story/></div>' })],
  argTypes: {
        location: {
        control: {
            type: 'select'
        },
        options: ['top', 'bottom', 'start', 'end'],
        },
        tooltipType: {
            control: {
                type: 'select',
            },
            options: ['tooltip', 'popover'],
        },
        hasTitle: { control: 'boolean' },
    },
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Tooltip = {
  args: {
    location: 'bottom', 
    label: "Tooltip",
    tooltipType: 'popover',
    hasTitle: true,
    popoverTitle: "Popover title",
    popoverText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    
  },
};