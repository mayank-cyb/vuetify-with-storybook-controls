import ProgressBar from './LSXProgressBar.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
    title: 'Atoms/ProgressBar',
    component: ProgressBar,
    tags: ['autodocs'],
    argTypes: {
        color: {
        control: {
            type: 'select',
            },
        options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info'],
        },
    },
    progressValue: {
        control: {
            type: 'number',
            min: 0,
            max: 100,
            step: 10,
        },
    },
};
  
  // More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const ProgressBarPrimary = {
    args: {
        color: 'primary',
        progressValue: 50
    },
};
