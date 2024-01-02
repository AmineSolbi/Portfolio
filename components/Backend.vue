<template>
    <div class="bg-[#41A1BA] w-[364px] h-[329px] rounded-3xl" data-aos="fade-left">
        <p class="text-[30px] font-pangramBold text-white text-center mt-5">Back-end</p>
        <div v-for="skill in skills" :key="skill">
            <div class="font-pangramBold text-white flex flex-1 mt-5">
                <Icon :icon="skill.icon" class="text-[40px] ml-[15%] -mt-1" />
                <p class="-mt-1 w-full text-[25px] ml-[15%]">{{ skill.name }}</p>
            </div>
            <p class="text-[30px] font-pangramBold text-white text-center mt-5">CMS</p>
            <div class="font-pangramBold text-white flex flex-1 mt-5">
                <Icon icon="simple-icons:directus" class="text-[40px] ml-[15%] -mt-1" />
                <p class="-mt-1 w-full text-[25px] ml-[15%]">Directus</p>
            </div>

        </div>
    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';

const skills = [{
    name: "Django",
    icon: "akar-icons:django-fill"
},

]
</script>