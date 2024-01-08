<template>
    <div class="bg-[#41A1BA] w-[364px] h-[329px] rounded-3xl" data-aos="fade-right">
        <p class="text-[30px] font-pangramBold text-white text-center mt-5">Design</p>
        <div v-for="skill in skills" :key="skill">
            <div class="font-pangramBold text-white flex flex-1 mt-5">
                <Icon :icon="skill.icon" class="text-[40px] ml-[15%] -mt-1" />
                <p class="-mt-1 w-full text-[25px] ml-[15%]">{{ skill.name }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';

const skills = [{
    name: "Figma",
    icon: "fa6-brands:figma"
}, {
    name: "Adobe XD",
    icon: "simple-icons:adobexd"
},

]
</script>