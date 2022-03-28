import { mount, shallowMount } from "@vue/test-utils";
import ButtonTab from "./ButtonTab.vue";

test("Mount component", async () => {
  // arrange
  expect(ButtonTab).toBeTruthy();

  const wrapper = mount(ButtonTab, {
    props: {
      title: "test",
    },
  });

  // assert
  expect(wrapper.text()).toContain("test");
  expect(wrapper.html()).toMatchSnapshot();
});

test("Title should be display", async () => {
  // arrange
  expect(ButtonTab).toBeTruthy();

  const wrapper = mount(ButtonTab, {
    props: {
      title: "test",
    },
  });

  // assert
  expect(wrapper.text()).toContain("test");
});

test("Emits on-close when button is clicked", () => {
  // arrange

  const wrapper = shallowMount(ButtonTab);

  // act

  wrapper.find("button").trigger("click");

  //assert

  expect(wrapper.emitted("userClick")).toHaveLength(1);
});

test("Background color is lighter when isActive props is false", () => {
  // arrange

  const wrapper = mount(ButtonTab, {
    props: {
      title: "test",
      isActive: false,
    },
  });

  // assert

  expect(wrapper.find("button").html()).toContain(
    "background-color: rgba(0, 0, 0, 0.1)"
  );
});

test("Background color is darker when isActive props is true", () => {
  // arrange

  const wrapper = mount(ButtonTab, {
    props: {
      title: "test",
      isActive: true,
    },
  });

  // assert

  expect(wrapper.find("button").html()).toContain(
    "background-color: rgba(0, 0, 0, 0.3)"
  );
});
