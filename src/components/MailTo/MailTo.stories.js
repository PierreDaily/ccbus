import MailTo from './index.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'MailTo',
  component: MailTo,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { MailTo},
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<mail-to v-bind="args" />',
});

export const WithEmail = Template.bind({});
export const WithoutEmail = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
WithEmail.args = {
  email: 'test@test.com',
};

WithoutEmail.args = {
  email: undefined
};


