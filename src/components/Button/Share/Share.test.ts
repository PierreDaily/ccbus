import { mount, shallowMount } from "@vue/test-utils";
import Share from "./index.vue";

test("Mount component", async () => {
  // arrange
  expect(Share).toBeTruthy();

  const wrapper = mount(Share, {
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
    expect(Share).toBeTruthy();
  
    const wrapper = mount(Share, {
      props: {
        to: URL,
      },
    });
  
    // assert
    expect(wrapper.find("router-link").exists()).toBe(true)
    expect(wrapper.find("router-link").attributes("to")).toBe(URL)
  });
