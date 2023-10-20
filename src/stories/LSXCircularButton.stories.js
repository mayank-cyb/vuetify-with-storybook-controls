import CircularButton from "./LSXCircularButton.vue";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: "Atoms/LSXCircleButton",
  component: CircularButton,
  tags: ["autodocs"],
  argTypes: {
    appearance: {
      control: {
        type: "select",
      },
      options: ["default", "outline"],
    },
    btnType: {
      control: {
        type: "select",
      },
      options: ["primary", "secondary", "success", "warning", "danger", "info"],
    },
    onClick: { action: "button clicked" },
    size: {
      control: {
        type: "select",
      },
      options: ["small", "medium", "large"],
    },
    prependIcon: {
      control: {
        type: "select",
      },
      options: ["", "mdi-check-circle", "mdi-account-circle"],
    },
    appendIcon: {
      control: {
        type: "select",
      },
      options: [
        "",
        "mdi-calendar",
        "mdi-clock",
        "src/assets/Arrow-Up-Icon.svg",
        "src/assets/Arrow-Down-Icon.svg",
      ],
    },
    image: {
      control: {
        type: "select",
      },
      options: [
        "",
        "mdi-calendar",
        "mdi-clock",
        "src/assets/Arrow-Up-Icon.svg",
        "src/assets/Arrow-Dwn-Icon.svg",
        "src/assets/Small-Arrow-Up-Icon.svg",
        "src/assets/Small-Arrow-Dwn-Icon.svg",
        "src/assets/Top-Nav-Bell.svg",
        "src/assets/Top-Nav-Message.svg",
        "src/assets/Top-Nav-Search.svg",
      ],
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Button = {
  args: {
    primary: true,
    label: "",
    btnType: "primary",
    options: "large",
    prependIcon: "",
    appendIcon: "",
    image: "src/assets/Top-Nav-Bell.svg",
  },
};
