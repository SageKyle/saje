import styles from '@/app/page.module.css'
import { Metadata } from 'next'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import CTA from '../components/home/CTA'
import Playground from './Playground'

export const metadata: Metadata = {
	title: 'Playground',
	description:
		'Here are some projects that have helped me understand several concepts in web development',
}

export default function page() {
	return (
		<>
			<Navbar />
			<main className={styles.main}>
				<Playground />
				<CTA />
			</main>
			<Footer />
		</>
	)
}
