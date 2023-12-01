import css from '@/app/assets/icons/skill-icons/css.svg'
import firebase from '@/app/assets/icons/skill-icons/firebase.svg'
import framer from '@/app/assets/icons/skill-icons/framer-motion.svg'
import git from '@/app/assets/icons/skill-icons/git.webp'
import html from '@/app/assets/icons/skill-icons/html5.svg'
import javascript from '@/app/assets/icons/skill-icons/javascript.svg'
import nextjs from '@/app/assets/icons/skill-icons/nextjs.svg'
import tanstack from '@/app/assets/icons/skill-icons/react-query.png'
import router from '@/app/assets/icons/skill-icons/react-router.svg'
import react from '@/app/assets/icons/skill-icons/react.svg'
import scss from '@/app/assets/icons/skill-icons/sass.svg'
import tailwind from '@/app/assets/icons/skill-icons/tailwind-css.svg'
import typescript from '@/app/assets/icons/skill-icons/typescript.svg'
import { StaticImageData } from 'next/image'

type technology = {
	name: string
	logo: StaticImageData
}

export const skills: string[] = [
	'HTML',
	'CSS',
	'JavaScript',
	'React',
	'Next JS',
	'TypeScript',
	'Firebase',
	'Framer Motion',
	'SCSS',
	'TanStack Query',
]

export const technologies: technology[] = [
	{ name: 'JavaScript', logo: javascript },
	{ name: 'React', logo: react },
	{ name: 'Next JS', logo: nextjs },
	{ name: 'TypeScript', logo: typescript },
	{ name: 'HTML', logo: html },
	{ name: 'CSS', logo: css },
	{ name: 'Firebase', logo: firebase },
	{ name: 'Git', logo: git },
	{ name: 'SCSS', logo: scss },
	{ name: 'Tailwind CSS', logo: tailwind },
	{ name: 'TanStack Query', logo: tanstack },
	{ name: 'React Router', logo: router },
	{ name: 'Framer Motion', logo: framer },
]
