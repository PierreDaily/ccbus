import { mount } from "@vue/test-utils";
import Social from "./index.vue";

test("Mount component", async () => {
  // arrange
  expect(Social).toBeTruthy();

  const wrapper = mount(Social, {
    props: {
      app: "facebook",
      url: "my-website.com",
    },
  });

  // assert
  expect(wrapper.html()).toMatchSnapshot();
});

test("Link to Facebook", async () => {
  // arrange
  const URL = "http://www.facebook.com/share.php?u=my-website.com";
  expect(Social).toBeTruthy();

  const wrapper = mount(Social, {
    props: {
      app: "facebook",
      url: "my-website.com",
    },
  });

  // assert
  expect(wrapper.find("a").exists()).toBe(true);
  expect(wrapper.find("a").attributes("href")).toBe(URL);
});

test("Link to Whatsapp", async () => {
  // arrange
  const URL = "https://api.whatsapp.com/send/?text=my-website.com";
  expect(Social).toBeTruthy();

  const wrapper = mount(Social, {
    props: {
      app: "whatsapp",
      url: "my-website.com",
    },
  });

  // assert
  expect(wrapper.find("a").exists()).toBe(true);
  expect(wrapper.find("a").attributes("href")).toBe(URL);
});

test("Link to Messenger", async () => {
  // arrange
  const URL = "fb-messenger://share/?link=my-website.com";
  expect(Social).toBeTruthy();

  const wrapper = mount(Social, {
    props: {
      app: "messenger",
      url: "my-website.com",
    },
  });

  // assert
  expect(wrapper.find("a").exists()).toBe(true);
  expect(wrapper.find("a").attributes("href")).toBe(URL);
});

test("Link to Twitter", async () => {
  // arrange
  const URL = "https://twitter.com/intent/tweet?url=my-website.com";
  expect(Social).toBeTruthy();

  const wrapper = mount(Social, {
    props: {
      app: "twitter",
      url: "my-website.com",
    },
  });

  // assert
  expect(wrapper.find("a").exists()).toBe(true);
  expect(wrapper.find("a").attributes("href")).toBe(URL);
});
