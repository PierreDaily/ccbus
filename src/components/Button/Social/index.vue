<template>
    <a class="flex flex-col justify-start items-center w-18" :href="shareUrl" target="_blank" rel="noopener">
        <img class="w-16 h-16" :src="icon" />
        <span class="font-sans text-white text-base capitalize">{{ app }}</span>
    </a>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import facebookIcon from "@/assets/icons/social/facebook.svg";
import messengerIcon from "@/assets/icons/social/messenger.svg";
import twitterIcon from "@/assets/icons/social/twitter.svg";
import whatsappIcon from "@/assets/icons/social/whatsapp.svg";

const FACEBOOK = 'facebook';
const MESSENGER = 'messenger';
const TWITTER = 'twitter';
const WHATSAPP = 'whatsapp';


export default defineComponent({
    name: 'Social',
    props: {
        app: {
            type: String,
            required: true,
            validator(value: string) {
                return [FACEBOOK, MESSENGER, TWITTER, WHATSAPP].includes(value)
            }
        },
        url: {
            type: String,
            required: true
        }
    },
    setup(props) {
        const icon = computed(() => {
            switch (props.app) {
                case FACEBOOK:
                    return facebookIcon

                case MESSENGER:
                    return messengerIcon

                case TWITTER:
                    return twitterIcon

                case WHATSAPP:
                    return whatsappIcon
            }
        })

        const shareUrl = computed(() => {
            switch (props.app) {
                case FACEBOOK:
                    return `http://www.facebook.com/share.php?u=${encodeURIComponent(props.url)}`

                case MESSENGER:
                    return `fb-messenger://share/?link=${encodeURIComponent(props.url)}`

                case TWITTER:
                    return `https://twitter.com/intent/tweet?url=${encodeURIComponent(props.url)}`

                case WHATSAPP:
                    return `https://api.whatsapp.com/send/?text=${encodeURIComponent(props.url)}`
            }
        })
        return {
            icon,
            shareUrl
        }
    }
})
</script>