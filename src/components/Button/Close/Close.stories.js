import CloseBtn from "./index.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "CloseBtn",
  component: CloseBtn,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { CloseBtn },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<close-btn v-bind="args" />',
});

export const WithURL = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args

WithURL.args = {
  to: "http://mywebsite.com",
};
