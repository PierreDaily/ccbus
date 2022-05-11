import DisplayTime from './index.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'DisplayTime',
  component: DisplayTime,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    time: {control: { type: 'select' },
    options: ['9:30 am', '12:00 pm'],
  },}
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { DisplayTime },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<display-time v-bind="args" />',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
    time: '11:30 am',
};
