import { mount, shallowMount } from "@vue/test-utils";
import Close from "./index.vue";

test("Mount component", async () => {
  // arrange
  expect(Close).toBeTruthy();

  const wrapper = mount(Close, {
    props: {
      to: "/test",
    },
  });

  // assert
  expect(wrapper.html()).toMatchSnapshot();
});

test("Mount component", async () => {
    // arrange
    const URL = "/test"
    expect(Close).toBeTruthy();
  
    const wrapper = mount(Close, {
      props: {
        to: URL,
      },
    });
  
    // assert
    expect(wrapper.find("router-link").exists()).toBe(true)
    expect(wrapper.find("router-link").attributes("to")).toBe(URL)
  });
