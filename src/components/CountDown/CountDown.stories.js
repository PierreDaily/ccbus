import CountDown from './index.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'CountDown',
  component: CountDown,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    timeLeft: {control: { type: 'select' },
    options: ['3 min', '13 min', undefined],
  },}
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { CountDown },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<count-down v-bind="args" />',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
    timeLeft: '13 min',
};
