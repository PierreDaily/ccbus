import { mount, shallowMount } from "@vue/test-utils";
import CounDown from "./index.vue";

const timeOut = "2 min";

test("Mount component", async () => {
  // arrange
  expect(CounDown).toBeTruthy();


  const wrapper = mount(CounDown, {
    props: {
        timeLeft:timeOut
    },
  });

  // assert

  expect(wrapper.html()).toMatchSnapshot();
});

test("Should render '2 min' when time props is passed on", async () => {
  // arrange
  expect(CounDown).toBeTruthy();

  const wrapper = mount(CounDown, {
    props: {
        timeLeft: timeOut
    },
  });

  // assert
  expect(wrapper.text()).toContain(timeOut);

});


test("Should render '----' when time props isn't passed on", async () => {
    // arrange
    expect(CounDown).toBeTruthy();
  
    const wrapper = mount(CounDown, {
      props: {
      },
    });
  
    // assert
    expect(wrapper.text()).toContain("---");
  
  });
