<template>
  <div class="bg-gradient-to-br from-Homeblue to-ToHomeBlue overflow-hidden">

    <div
      class="ph:hidden w-full grid grid-cols-5 gap-5 text-center font-pangramMed text-lg text-white animate-translateNav p-5 fixed bg-[#0e1259eb] ph:p-3 ph:text-sm z-10">
      <NuxtLink v-for="links in link" :key="links" @click="scrollToTag(links.name)" class="cursor-pointer">{{ links.name
      }}
      </NuxtLink>

      <p>Download my resume</p>
    </div>

    <div class="h-screen mt-[10%] ml-[10%] pt-[5%] ph:m-0" id="Home">
      <div class="animate-translateY">
        <p class="text-[#60BCEB] text-2xl font-pangramRegular ph:pl-[20px]">Hi my name is </p>
        <p class="text-[#60BCEB] text-6xl font-pangramBold ph:pl-[20px]">Amine Solbi</p>
        <p class="font-pangramLight text-white text-[28px] w-[878px] ph:w-full ph:p-5 ph:text-left">
          <span class="font-pangramBold text-[40px]">
            Software
            engineer</span> .
          dedicated
          to
          crafting
          outstanding digital journeys, with occasional forays into
          design. Currently, my focus is on developing accessible solutions.
        </p>
      </div>
      <div class="ml-[1280px] -mt-[290px] animate-translateImage">
        <img :src="Me" />
      </div>
      <div class="animate-translateX mt-[6%] ph:pl-5 ph:pt-[300px]">
        <p class="text-white text-[30px] font-bold underline underline-offset-8 ph:pl-[20px]">My network</p>
        <div class="rounded-[9px] grid grid-cols-3 gap-3 w-[1200px] ph:grid ph:grid-cols-1 ph:gap-3 ph:pl-[20px]">
          <div v-for="network in Mynetwork" :key="network" class="bg-[#2E6B94] rounded-lg mt-5 ph:w-[30%] ph:text-white">

            <NuxtLink :to="network.link" target="_blank">
              <Icon :icon="network.icone" class="text-[30px] ph:text-[30px] ml-[10%] mt-[3%] ph:ml-[10%] ph:mt-[5%]" />
              <p class="font-pangramMed text-xl -mt-[12%] ml-[20%] p-5 ph:-mt-[14%] ph:ml-[15%] ph:p-5">{{ network.name }}
              </p>
            </NuxtLink>

          </div>
        </div>
      </div>
    </div>
    <div class="h-screen  pt-[5%] w-full" id="Skills">
      <p class="text-[50px] font-pangramBold text-white text-center">Skills</p>
      <div class="grid grid-cols-3 gap-3 pl-[10%] ph:grid ph:grid-cols-1 ph:gap-3 ph:pl-[8%]">
        <Skills />
        <Frontend />
        <Backend />
      </div>
    </div>
    <div class="h-screen ph:mt-[90%] ph:h-[300%]" data-aos="fade-down" id="Projects">
      <p class="text-[50px] font-pangramBold text-center text-white">Projects</p>
      <Works />
    </div>
    <div class="h-screen mt-[50%] ph:h-[330%]" data-aos="fade-right" id="Experiance">
      <p class="text-[50px] font-pangramBold text-center text-white pt-[5%]">Experiance</p>
      <Experiance />
    </div>
  </div>
</template>
<script setup>
import { Icon } from '@iconify/vue';
import Me from '/image/20231213_182606.png'
const link = [{
  id: 1,
  name: 'Home'
}, {
  id: 2,
  name: 'Skills'
}, {
  id: 3,
  name: 'Projects'
}, {
  id: 4,
  name: 'Experiance'
}]
const scrollToTag = (name) => {
  const skillsSection = document.getElementById(name);
  if (skillsSection) {
    skillsSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const Mynetwork = [
  {
    id: 1,
    name: "GitHub",
    icone: "mdi:github",
    link: "https://github.com/AmineSolbi?tab=repositories"
  },
  {
    id: 2,
    name: "linkedin",
    icone: "pajamas:linkedin",
    link: "https://linkedin.com/in/amine-solbi-104a8623a"
  },
  {
    id: 3,
    name: "amineSolbidev@gmail.com",
    icone: "simple-icons:gmail",
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=amineSolbidev@gmail.com&su=Your%20Subject&body=Your%20Message%20Here"
  },

]

</script>