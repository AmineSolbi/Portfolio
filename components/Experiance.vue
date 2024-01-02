<template>
    <div class="animate-translateX w-full mt-[10%] ml-[150%]">
        <img :src="Me"
            class="absolute w-[589px] h-[441px] mt-[3%] -ml-[35%] ph:w-[360px] ph:h-[300px] ph:-ml-[46%] ph:-mt-[10%]" />

        <hr
            class=" rotate-0 border-[#52D3D8] border-4 absolute h-[58%] rounded-lg -ml-[3%] ph:rotate-90 ph:h-[45%] ph:mt-[25%]" />

        <div
            class="grid grid-cols-1 gap-4 ml-5 mt-1 ph:-ml-[150%] ph:mt-[280%] ph:text-white ph:grid ph:grid-cols-2 ph:w-[290%]">
            <div v-for="experiance in object" :key="experiance">
                <p><span class="font-bold">Name</span> : {{ experiance.name }}</p>
                <p><span class="font-bold">Company</span> : {{ experiance.socitie }}</p>
                <p><span class="font-bold">Duration</span> : {{ experiance.duration }} Months</p>
                <p><span class="font-bold">Objective</span> : {{ experiance.objectf }}</p>
                <p><span class="font-bold">Skills</span> : {{ experiance.skills }}</p>

            </div>
        </div>
    </div>
</template>
<script setup>
import Me from '/image/20231213_182606.png'
const object = [{
    id: 1,
    'name': 'Technician trainee',
    'socitie': 'Marsa Maroc',
    'duration': 3,
    'objectf': 'Creation of 2 Web applications to manage Boats and materials',
    'skills': 'Communication · PhpMyAdmin · PHP · MySQL · JavaScript · HTML5'
}, {
    id: 2,
    'name': 'Internship engineering assistant',
    'socitie': 'Albarray',
    'duration': 7,
    'objectf': 'Creation of a Web application to promote solar panels',
    'skills': 'Communication · ReactJs · Framework Django REST · GitHub'
}, {
    id: 3,
    'name': 'Intership',
    'socitie': 'Päiperléck Aides et Soins à Domicile - Résidences Seniors',
    'duration': 6,
    'objectf': 'developing e-learning',
    'skills': 'Communication · ReactJs · Framework Django REST · GitHub'
}, {
    id: 4,
    'name': 'Intership',
    'socitie': 'A&T Experts',
    'duration': 2,
    'objectf': 'developing 2 web applications as absence management and financial management',
    'skills': 'Communication · Framework Django REST · GitHub · Angular'
}]
</script>
