<template>
  <a
    class="
      flex
      items-center
      text-white
      border-none
      rounded-lg
      h-[24px]
      w-[24px]
      justify-center
      flex-col
      focus:outline focus:outline-white focus:outline-1
    "
    :href="href"
  >
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 8L12 13L4 8V6L12 11L20 6M20 4H4C2.89 4 2 4.89 2 6V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V6C22 4.89 21.1 4 20 4Z"
        fill="white"
      />
    </svg>
  </a>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "MailTo",
  props: {
    email: {
      type:String,
      required: true
    }
  },
  computed: {
    href() {
      return this.$props.email ? `mailto:${this.$props.email}` : "#"
    }
  }
});
</script>
