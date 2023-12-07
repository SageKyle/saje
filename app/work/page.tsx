import styles from '@/app/page.module.css'
import { Metadata } from 'next'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import CTA from '../components/home/CTA'
import Work from './Work'

export const metadata: Metadata = {
	title: 'My Work',
	description: "Some amazing projects I've worked on",
	keywords: [
		'frontend developer',
		'React developer',
		'React',
		'NextJS',
		'TypeScript',
		'web developer',
		'Paul Saje',
		'Paul Ominyi',
		'JavaScript',
		'JavaScript developer',
	],
}

export default function Home() {
	return (
		<>
			<Navbar />
			<main className={styles.main}>
				{/* <Hero /> */}
				<Work />
				<CTA />
			</main>
			<Footer />
		</>
	)
}
