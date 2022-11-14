import { mount } from "@vue/test-utils";
import TimeSlot from "./index.vue";

describe("TimeSlot component", () => {
    it("should mount", async () => {
        // arrange
        expect(TimeSlot).toBeTruthy();
      
        const wrapper = mount(TimeSlot, {
          props: {
            time: "12:00am",
            timeLeft: "2 min",
            isActive: false,
            isFocus: false,
          },
        });
      
        // assert
        expect(wrapper.html()).toMatchSnapshot();
      });

      it("should have 'disable' class if isActive props is false", () => {
        // arrange
      
        const wrapper = mount(TimeSlot, {
          props: {
            time: "12:00am",
            timeLeft: "2 min",
            isActive: false,
            isFocus: false,
          },
        });
      
        //assert
      
          expect(wrapper.find("li").html()).toContain(
        'class="bg-grey-light opacity-60'
      );
    });

    it("should have 'disable' class if isActive props is false", () => {
        // arrange
      
        const wrapper = mount(TimeSlot, {
          props: {
            time: "12:00am",
            timeLeft: "2 min",
            isActive: true,
            isFocus: false,
          },
        });
      
        //assert
      
          expect(wrapper.find("li").html()).not.toContain(
        'class="class="bg-grey-light opacity-60'
      );
    });
    
    it("should emit a 'scrollToActiveSlot' on mount if isFocus props is true", () => {
      // arrange
    
      const wrapper = mount(TimeSlot, {
        props: {
          time: "12:00am",
          timeLeft: "2 min",
          isActive: false,
          isFocus: true,
        },
      });
    
      //assert
    
      expect(wrapper.emitted("scrollToActiveSlot")).toHaveLength(1);
    });
    
    it("shouldn't emit a 'scrollToActiveSlot' on mount if isFocus props is false", () => {
        // arrange
      
        const wrapper = mount(TimeSlot, {
          props: {
            time: "12:00am",
            timeLeft: "2 min",
            isActive: false,
            isFocus: false,
          },
        });
      
        //assert
      
        expect(wrapper.emitted("scrollToActiveSlot")).toBeUndefined();
      });
});

