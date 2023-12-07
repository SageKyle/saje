import styles from '@/app/page.module.css'
import { Metadata } from 'next'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import CTA from '../components/home/CTA'
import Shelf from './Shelf'

export const metadata: Metadata = {
	title: 'My Shelf',
	description:
		"Some of the most popular articles I've written on web development",
	keywords: [
		'frontend developer',
		'React developer',
		'React',
		'NextJS',
		'TypeScript',
		'web developer',
		'Paul Saje',
		'Paul Ominyi',
		'technical writer',
		'blog',
	],
}

export default function Home() {
	return (
		<>
			<Navbar />
			<main className={styles.main}>
				<Shelf />
				<CTA />
			</main>
			<Footer />
		</>
	)
}
