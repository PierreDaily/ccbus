import { mount, shallowMount } from "@vue/test-utils";
import MailTo from "./index.vue";

test("Mount component", async () => {
  // arrange
  expect(MailTo).toBeTruthy();

  const wrapper = mount(MailTo, {
    props: {
      email: "john@do.com",
    },
  });

  // asserts
  expect(wrapper.html()).toMatchSnapshot();
});


test("Should create a link to the correct email address", async () => {
    // arrange
    expect(MailTo).toBeTruthy();
  
    const wrapper = mount(MailTo, {
      props: {
        email: "john@do.com",
      },
    });
  
    // asserts
    expect(wrapper.attributes('href')).toBe('mailto:john@do.com')
  });

  test("Should create a link to the default email address", async () => {
    // arrange
    expect(MailTo).toBeTruthy();
  
    const wrapper = mount(MailTo);
  
    // asserts
    expect(wrapper.attributes('href')).toBe(`mailto:${import.meta.env.VITE_CONTACT_EMAIL}`)
  });