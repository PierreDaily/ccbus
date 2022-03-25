<template>
  <button
    @click="handleClick"
    class="button-tab"
    :style="{ backgroundColor: backgroundColor }"
  >
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        class="phase__icon-path"
        d="M12 7V3H2V21H22V7H12ZM6 19H4V17H6V19ZM6 15H4V13H6V15ZM6 11H4V9H6V11ZM6 7H4V5H6V7ZM10 19H8V17H10V19ZM10 15H8V13H10V15ZM10 11H8V9H10V11ZM10 7H8V5H10V7ZM20 19H12V17H14V15H12V13H14V11H12V9H20V19ZM18 11H16V13H18V11ZM18 15H16V17H18V15Z"
        fill="#FFFFFF"
      />
    </svg>
    <span class="title">{{ title }}</span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ButtonTab",
  props: {
    isActive: Boolean,
    title: String,
  },
  computed: {
    backgroundColor(): string {
      return this.isActive ? "rgba(0, 0, 0, 0.3)" : "rgba(0, 0, 0, 0.1)";
    },
  },
  methods: {
    handleClick() {
      this.$emit("userClick");
    },
  },
});
</script>

<style lang="scss" scoped>
.button-tab {
  align-items: center;
  border: none;
  border-radius: 10px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  height: 50px;
  justify-content: center;
  width: 160px;

  &:focus {
    outline: solid 1px var(--font-color-white);
  }
}

.title {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 8px;
  line-height: 9px;
  text-transform: capitalize;
}
</style>
