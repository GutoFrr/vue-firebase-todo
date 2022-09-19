import vueLogo from '../assets/vue.svg'
import firebaseLogo from '../assets/firebase.svg'
import tailwindLogo from '../assets/tailwind.svg'

export const techs = [
  {
    id: 1,
    name: 'Vue.js',
    content:
      'Vue.js is an open-source front-end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members.',
    image: vueLogo,
    color: 'vueGreen',
  },
  {
    id: 2,
    name: 'Firebase',
    content:
      'Firebase is a set of hosting services for any type of application. It offers NoSQL and real-time hosting of databases, content, social authentication, and notifications, such as a real-time communication server.',
    image: firebaseLogo,
    color: 'firebase',
  },
  {
    id: 3,
    name: 'Tailwind CSS',
    content:
      'A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup. This whole application is styled with Tailwind.',
    image: tailwindLogo,
    color: 'tailwind',
  },
]
