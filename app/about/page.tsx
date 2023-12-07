import styles from '@/app/page.module.css'
import { Metadata } from 'next'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import About from './About'
import MyTools from './MyTools'

export const metadata: Metadata = {
	title: 'About Me',
	description: "Here's a little about me",
	keywords: [
		'frontend developer',
		'React developer',
		'web developer',
		'Paul Saje',
		'Paul Ominyi',
		'Technical Writer',
		'JavaScript developer',
	],
}

export default function page() {
	return (
		<>
			<Navbar />
			<main className={styles.main}>
				<About />
				<MyTools />
			</main>
			<Footer />
		</>
	)
}
