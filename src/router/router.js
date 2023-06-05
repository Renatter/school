import {
    createRouter,
    createWebHistory
} from 'vue-router';

import Reg from "../components/Reg.vue"
import Home from "../view/Home.vue"
import Admin from "../view/Admin.vue"
import schedule from "../view/schedule.vue"
import Maps from "../view/Maps.vue"
import Circle from "../view/Circle.vue"
import Classs from "../view/Classs.vue"
import Book from "../view/Books.vue"
import NewsBlock from "../components/NewsBlock.vue"
import TeacherBlock from "../components/TeacherBlock.vue"
import CircleSportCard from "../components/CircleSportCard.vue"
import CircleArtCard from "../components/CircleArtCard.vue"
import CircleItCard from "../components/CircleItCard.vue"
import CircleScienceCard from "../components/CircleScienceCard.vue"
import ClassCard from "../components/ClassCard.vue"
const router = createRouter({

    history: createWebHistory(),
    routes: [{
            path: '/Reg',
            name: 'Reg',
            component: Reg,
        },
        {
            path: '/',
            name: '/',
            component: Home,
        },
        {
            path: '/Admin',
            name: 'Admin',
            component: Admin,
        },

        {
            path: '/schedule',
            name: 'schedule',
            component: schedule,
        },
        {
            path: '/Maps',
            name: 'Maps',
            component: Maps,
        },
        {
            path: '/Circle',
            name: 'Circle',
            component: Circle,
        },
        {
            path: '/Classs',
            name: 'Classs',
            component: Classs,
        },
        {
            path: '/Book',
            name: 'Book',
            component: Book,
        },
        {
            path: '/CircleSportCard',
            name: 'CircleSportCard',
            component: CircleSportCard,
        },
        {
            path: '/NewsBlock/:id',
            name: 'NewsBlock',
            component: NewsBlock,
            props: true
        },
        {
            path: '/TeacherBlock/:id',
            name: 'TeacherBlock',
            component: TeacherBlock,
            props: true
        },
        {
            path: '/CircleArtCard',
            name: 'CircleArtCard',
            component: CircleArtCard,
        },
        {
            path: '/CircleItCard',
            name: 'CircleItCard',
            component: CircleItCard,
        },
        {
            path: '/CircleScienceCard',
            name: 'CircleScienceCard',
            component: CircleScienceCard,
        },
        {
            path: '/ClassCard/:id',
            name: 'ClassCard',
            component: ClassCard,
            props: true
        },
    ]
})
export default router;