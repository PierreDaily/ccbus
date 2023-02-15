<template>
    <div class="bg-dark-green h-screen ">
        <section class="w-9/12 h-2/6 absolute top-1/4 left-1/2 -translate-x-2/4 flex justify-center items-center">
            <ul class="flex flex-wrap">
                <li class="block w-1/2 flex justify-center items-center mb-9"><Social app="twitter" url="https://ccbus.pandy.community" /></li>
                <li class="block w-1/2 flex justify-center items-center mb-9"><Social app="facebook" url="https://ccbus.pandy.community" /></li>
                <li class="block w-1/2 flex justify-center items-center"><Social app="whatsapp" url="https://ccbus.pandy.community" /></li>
                <li class="block w-1/2 flex justify-center items-center"><Social app="messenger" url="https://ccbus.pandy.community" /></li>
            </ul>
            
        </section>
        <CloseBtn class="absolute left-1/2 -translate-x-2/4 bottom-16" to="/" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CloseBtn from "../../components/Button/Close/index.vue"
import Social from "../../components/Button/Social/index.vue"
export default defineComponent({
    name: "Share",
    components: {
        CloseBtn,
        Social
    },
});
</script>