<template>
    <div class="grid grid-cols-3 gap-3 w-[1530px] ph:grid ph:grid-cols-1 ph:gap-3 ph:-ml-[20px] ph:w-full ">
        <div v-for="work in works" :key="work.id">
            <div
                class="group bg-[#131647] rounded-xl text-center h-[100px] cursor-pointer hover:h-[310px] duration-300 shadow-lg overflow-y-auto ph:overflow-hidden ph:hover:overflow-y-auto">

                <p class="text-white font-pangramBold pt-5 text-[25px]">{{ work.titel }}</p>

                <div class="text-white font-pangramBold opacity-0 group-hover:opacity-100 transition-opacity ">
                    <p class="text-white p-5 mt-10">{{ work.about }}</p>
                    <div class="grid grid-cols-2 gap-2 mt-10 p-5"
                        :class="{ 'grid grid-cols-2 gap-3': work.langague3, 'grid grid-cols-1': work.langague2 && !work.langauge1 }">
                        <div class="bg-[#2E6B94] flex flex-1 rounded-lg p-1" v-show="work.langague2"
                            :class="{ 'w-[450px] ph:w-[320px]': work.id === 5 }">
                            <Icon :icon="`mdi:${work.langague2}`" class="text-[30px] ml-2" />
                            <p class="text-[20px] ml-5">{{ capitalizeFirstLetter(work.langague2) }}</p>
                        </div>

                        <div class="bg-[#2E6B94] flex flex-1 rounded-lg p-1" v-show="work.langague3">
                            <Icon :icon="`simple-icons:${work.langague3}`" class="text-[30px] ml-2" />
                            <p class="text-[20px] ml-5">{{ capitalizeFirstLetter(work.langague3) }}</p>
                        </div>

                        <div class="bg-[#2E6B94] flex flex-1 rounded-lg p-1" v-show="work.langauge1">
                            <Icon :icon="`akar-icons:${work.langauge1}-fill`" class="text-[30px] ml-2" />
                            <p class="text-[20px] ml-5">{{ capitalizeFirstLetter(work.langauge1) }}</p>
                        </div>

                        <div class="bg-[#2E6B94] flex flex-1 rounded-lg p-1 hover:bg-gray-100" v-show="!work.noimage"
                            :class="{ 'w-[450px] ph:w-[320px]': work.id === 1 }">
                            <p class="text-[20px] font-medium w-full hover:text-black" @click="showDetails(work)">See
                                Details</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <transition name="fade-slide" mode="out-in">
            <div v-show="ishowed"
                class="fixed top-0 left-0 w-full h-full justify-center bg-[#1e5961] p-8 max-w-3xl animate-translateX overflow-y-auto"
                :class="{ 'animate-translateX': ishowed }">
                <p class="text-3xl text-center font-bold">{{ selectedWorkTitel }}</p>

                <div class="text-justify grid grid-rows-1 gap-2 font-pangramMed text-lg ph:mt-5 mt-5">
                    <img :src="selectedWorkDetails.imageLog" />
                    <p>{{ selectedWorkDetails.aboutLog }}</p>
                    <img :src="selectedWorkDetails.image" />
                    <p>{{ selectedWorkDetails.about }}</p>
                    <img :src="selectedWorkDetails.imageAdd" />
                    <p>{{ selectedWorkDetails.aboutAdd }}</p>
                    <img :scr="selectedWorkDetails.imageDash" />
                    <p>{{ selectedWorkDetails.aboutDash }}</p>
                    <img :src="selectedWorkDetails.imageDetails" />
                    <p>{{ selectedWorkDetails.aboutDetails }}</p>
                </div>

                <button
                    class="mt-4 px-4 py-2 bg-[#F3F8FF] text-black rounded hover:bg-blue-500 duration-300 hover:text-white font-bold"
                    @click="closeshow">
                    Close
                </button>
            </div>
        </transition>
    </div>
</template>


<script setup>
import { Icon } from '@iconify/vue';
import { ref, onMounted, onUnmounted } from 'vue';

const ishowed = ref(false);
const lastScrollPosition = ref(0);

const closeshow = () => {
    ishowed.value = false;
};

const selectedWorkDetails = ref({});
const selectedWorkTitel = ref({});

const showDetails = (work) => {
    selectedWorkDetails.value = work.details;
    selectedWorkTitel.value = work.titel;
    ishowed.value = true;
};

const capitalizeFirstLetter = (str) => {
    return str ? str.charAt(0).toUpperCase() + str.slice(1) : '';
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});

const handleScroll = () => {
    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition > lastScrollPosition.value) {
        ishowed.value = false;
    } else {
        ishowed.value = true;
    }

    lastScrollPosition.value = currentScrollPosition;
};

const works = [
    {
        id: 1,
        titel: 'Web Application of data processing',
        about: 'Importing data from various Excel files, then creating distinct processes for visualizing sales data.',
        langauge1: 'django',
        langague2: 'angular',
        details: {
            'image': '/image/Boat/Home.png',
            'about': 'dddddd',
        },
        noimage: true

    },
    {
        id: 1,
        titel: 'Web Application for absence management ',
        about: 'Efficient absence management system to streamline tracking and reporting of employee leave, ensuring smooth workforce operations',
        langauge1: 'django',
        langague2: 'angular',
        details: {
            'imageLog': '/image/absance/login.png',
            'aboutLog': 'When the user enters their information such as email and password, the system returns all their details such as role, name, team, etc., as shown in this figure. This is achieved using JWT (JSON Web Token) technology.',
            'image': '/image/absance/backend.png',
            'about': 'Regarding the absence management application, this figure shows an overview of the backend in this project',
            'imageAdd': '/image/absance/interface.png',
            'aboutAdd': 'The user can filter their information and view it according to this figure',
            'imageDetails': '/image/absance/exception.png',
            'aboutDetails': 'If the user has no data in a month, the figure above shows the following exception',

        },
    },
    {
        titel: 'Web Application for e-learning platform',
        about: 'Innovative e-learning platform offering accessible and interactive online education experiences for diverse learners',
        langauge1: 'django',
        langague3: 'chakraui',
        langague2: 'react',
        details: {

            'image': '/image/elearning/api.png',
            'about': 'To add a test, the administrator uses an HTTP POST method to communicate with our Web API. The administrator provides the necessary information such as the test title, each question \'s association with a module chapter, the questions, answers, the passing threshold, and suggested difficulty levels.The following figure provides a view of the test table',
            'imageAdd': '/image/elearning/Addtest.png',
            'aboutAdd': 'Regarding the Frontend section developed with React, the interface is represented as follows . We utilize Chakra UI for the design',
            'imageDetails': '/image/elearning/Test.png',
            'aboutDetails': 'The admin can modify the test or delete it. If they choose to delete the test, a modal will appear to prompt confirmation before deletion. When the test is modified, there will be information about who made the modification and when.',
        },

    },
    {
        id: 1,
        titel: 'Web Application to promote solar panels',
        about: 'Web application designed to promote solar panels, facilitating information dissemination, personalized assessments, and encouraging sustainable energy adoption',
        details: {
            'image': '/image/Boat/Home.png',
            'about': 'dddddd',
        },
        langauge1: 'django',
        langague2: 'react',
        noimage: true
    },
    {
        id: 5,
        titel: 'E-commerce website from scratch',
        about: 'Revolutionizing vintage clothing shopping with a meticulously designed frontend for an exclusive e-commerce experience',
        details: {
            'image': '/image/Boat/Home.png',
            'about': 'dddddd',
        },
        langague2: 'react',
        noimage: true
    },
    {
        id: 1,
        titel: 'Web Application to manage computer tools',
        about: 'Developing a robust web application for computer tools management using PHP, MySQL (via phpMyAdmin), JavaScript, and CSS. The platform ensures efficient tracking, maintenance, and seamless user interaction with intuitive design',
        details: {
            'image': '/image/Boat/Home.png',
            'about': 'dddddd',
        },
        noimage: true

    },
    {
        id: 1,
        titel: 'Web Application to manage Boats',
        about: 'Crafting a dynamic web solution to effortlessly manage boats, utilizing PHP, MySQL (via phpMyAdmin), JavaScript, CSS, and jQuery. This ensures smooth administration and user-friendly interaction, optimizing overall efficiency for streamlined boat operations',
        details: {
            'image': '/image/Boat/Home.png',
            'about': 'Home page that show diffirent action that can the user do ',
            'imageAdd': '/image/Boat/AddBoat.png',
            'aboutAdd': 'Introducing different cargo ships designed for various types of goods, each landing at specific berths in the port at scheduled times',
            'imageDash': '/image/Boat/Dashboard.png',
            'aboutDash': 'An overview dashboard for cargo ships, offering insights into their distribution and frequency in various locations',
            'imageDetails': '/image/Boat/details.png',
            'aboutDetails': 'Details for each post display the number of ships per month, along with an average, and the total count for each location.',


        },


    },
    {
        id: 1,
        titel: 'Website to promote a rent farm',
        about: 'Building an enticing website to promote a rentable farm, harmonizing HTML and CSS for an immersive online experience that beautifully showcases the farm \'s offerings and encourages potential renters.',
        details: {
            'image': '/image/Boat/Home.png',
            'about': 'dddddd',
        },

    },
    {
        id: 1,
        titel: 'Automatic chart',
        about: 'Autonomous cart programmed with Arduino, loaded with goods, navigates based on predefined x, y coordinates using integrated sensors.',
        details: {
            'image': '/image/Arduino/arduino.jpg',
            'about': 'Constructing and assembling various components for an autonomous cart, including ultrasonic sensors, DC motors, LCD screen, buttons, and more, all programmed with Arduino. The cart is loaded with goods and navigates based on predefined x, y coordinates using integrated sensors.',
        },


    },
];

</script>

<style>
.fade-slide-enter-active,
.fade-slide-leave-active {
    transition: opacity 0.5s, transform 0.5s;
}

.fade-slide-enter,
.fade-slide-leave-to {
    opacity: 0;
    transform: translateY(-100%);
}

body {
    scrollbar-width: thin;
    scrollbar-color: transparent transparent;
    overflow-y: auto;
}

body::-webkit-scrollbar {
    width: 12px;
}

body::-webkit-scrollbar-thumb {
    background-color: transparent;
}

body:hover::-webkit-scrollbar-thumb {
    background: #0e1259eb;
    border-radius: 5px;
}
</style>

