import Share from './index.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Share',
  component: Share,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
  },
};
/////////////////////////////
const router = createRouter({
  history: createWebHashHistory(),
  routes: [],
});

/////////////////////////////
// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Share},
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<share v-bind="args" />',
});

export const WithURL = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args


WithURL.args = {
  to: 'http://mywebsite.com',
};
