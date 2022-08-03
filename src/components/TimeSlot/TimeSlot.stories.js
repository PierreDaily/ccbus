import TimeSlot from "./index.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "TimeSlot",
  component: TimeSlot,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    isActive: { control: "boolean" },
    isFocus: { control: "boolean" },
    time: {
      control: { type: "select" },
      options: ["12:00 am", "0:00pm", undefined],
    },
    timeLeft: {
      control: { type: "select" },
      options: ["3 min", "13 min", undefined],
    },
    busLetter: { control: "text" },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { TimeSlot },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<time-slot v-bind="args" />',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
