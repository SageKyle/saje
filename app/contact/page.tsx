import styles from '@/app/page.module.css'
import { Metadata } from 'next'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Contact from './Contact'

export const metadata: Metadata = {
	title: 'Contact Me',
	description: "Here's how to get in touch with me",
	keywords: [
		'frontend developer',
		'React developer',
		'web developer',
		'Paul Saje',
		'Paul Ominyi',
		'Technical Writer',
		'JavaScript developer',
		'contact me',
	],
}

export default function page() {
	return (
		<>
			<Navbar />
			<main className={styles.main}>
				<Contact />
			</main>
			<Footer />
		</>
	)
}
