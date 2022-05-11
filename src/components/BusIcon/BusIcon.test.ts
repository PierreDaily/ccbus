import { mount, shallowMount } from "@vue/test-utils";
import BusIcon from "./index.vue";

test("Mount component", async () => {
  // arrange
  expect(BusIcon).toBeTruthy();

  const wrapper = mount(BusIcon, {
    props: {
    },
  });

  // assert

  expect(wrapper.html()).toMatchSnapshot();
});

test("Should render 'B' when no props is passed on", async () => {
  // arrange
  expect(BusIcon).toBeTruthy();

  const wrapper = mount(BusIcon, {
    props: {
    },
  });

  // assert
  expect(wrapper.text()).toContain("B");

});

test("Should render 'X' when props is passed on", async () => {
  // arrange
  expect(BusIcon).toBeTruthy();

  const wrapper = mount(BusIcon, {
    props: {
      busLetter: "X",
    },
  });

  // assert
  expect(wrapper.text()).toContain("X");

});

test("Should convert the props to uppercase", async () => {
  // arrange
  expect(BusIcon).toBeTruthy();

  const wrapper = mount(BusIcon, {
    props: {
      busLetter: "x",
    },
  });

  // assert
  expect(wrapper.text()).toContain("X");

});