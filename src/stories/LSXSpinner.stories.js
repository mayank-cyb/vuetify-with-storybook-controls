import LSXSpinner from './LSXSpinner.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
    title: 'Example/LSXSpinner',
    component: LSXSpinner,
    tags: ['autodocs'],
    argTypes: {
        color: {
        control: {
            type: 'select',
            },
        options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info'],
        },
    },
};
  
  // More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const SpinnerPrimary = {
    args: {
        color: 'primary',
    },
};
