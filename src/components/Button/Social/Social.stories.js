import Social from "./index.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Social",
  component: Social,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    app: {
      control: { type: "select" },
      options: ["twitter", "whatsapp", "facebook", "messenger"],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Social },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<social v-bind="args" />',
});

export const Twitter = Template.bind({});
export const Facebook = Template.bind({});
export const Whatsapp = Template.bind({});
export const Messenger = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args

Twitter.args = {
  app: "twitter",
  url: "ccbus.pandy.community",
};

Facebook.args = {
  app: "facebook",
  url: "ccbus.pandy.community",
};

Whatsapp.args = {
  app: "whatsapp",
  url: "ccbus.pandy.community",
};

Messenger.args = {
  app: "messenger",
  url: "ccbus.pandy.community",
};
