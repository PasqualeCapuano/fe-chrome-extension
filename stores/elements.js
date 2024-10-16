import { defineStore } from 'pinia';

export const elementsStore = defineStore('elements', {
    state: () => ({
        frameworks: [
            {title: 'Angular', subtitle: 'Angular library', description: 'Official Angular documentation', link:'https://angular.dev/', icon:'logos:angular-icon'},
            {title: 'React', subtitle: 'React library', description: 'Official React documentation', link:'https://react.dev/', icon:'logos:react'},
            {title: 'NextJs', subtitle: 'NextJs Framework', description: 'Official NextJs documentation', link:'https://nextjs.org/', icon:'logos:nextjs-icon'},
            {title: 'Vue', subtitle: 'Vue library', description: 'Official Vue documentation', link:'https://vuejs.org/', icon:'logos:vue'},
            {title: 'Nuxt', subtitle: 'Nuxt Framework', description: 'Official Nuxt documentation', link:'https://nuxt.com/', icon:'logos:nuxt-icon'},

        ],
        libraries: [
            {title: 'Bootstrap', subtitle: 'Bootstrap library', description: 'Official Bootstrap documentation', link:'https://getbootstrap.com/', icon:'logos:bootstrap'},
            {title: 'Tailwind', subtitle: 'Tailwind library', description: 'Official Tailwind documentation', link:'https://tailwindcss.com/', icon:'logos:tailwindcss-icon'},
            {title: 'Iconify', subtitle: 'Iconify library', description: 'Official Iconify documentation', link:'https://iconify.design/', icon:'solar:accessibility-line-duotone'},
        ],
    }),
    actions: {
        
    },
});