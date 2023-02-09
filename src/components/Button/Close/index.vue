<template>
    <router-link :to="to">
        <img class="h-10 w-10" :src="closeIcon" />
    </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import closeIcon from "@/assets/icons/close.svg";
export default defineComponent({
    name: 'CloseBtn',
    props: {
        to: {
            type: String,
            required: true
        }
    },
    setup() {
        return {
            closeIcon,
        };
    },
})
</script>