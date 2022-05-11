import { mount, shallowMount } from "@vue/test-utils";
import TimeDisplay from "./index.vue";

const time = "12:00";

test("Mount component", async () => {
  // arrange
  expect(TimeDisplay).toBeTruthy();


  const wrapper = mount(TimeDisplay, {
    props: {
        time
    },
  });

  // assert

  expect(wrapper.html()).toMatchSnapshot();
});

test("Should render 12:00 when time props is passed on", async () => {
  // arrange
  expect(TimeDisplay).toBeTruthy();

  const wrapper = mount(TimeDisplay, {
    props: {
        time
    },
  });

  // assert
  expect(wrapper.text()).toContain(time);

});


test("Should render '--:--' when time props isn't passed on", async () => {
    // arrange
    expect(TimeDisplay).toBeTruthy();
  
    const wrapper = mount(TimeDisplay, {
      props: {
      },
    });
  
    // assert
    expect(wrapper.text()).toContain("--:--");
  
  });
