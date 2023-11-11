import Hero from '@/app/components/home/Hero'
import styles from '@/app/page.module.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import CTA from '../components/home/CTA'
import Projects from './Projects'

export default function Home() {
	return (
		<>
			<Navbar />
			<main className={styles.main}>
				{/* <Hero /> */}
				<Projects />
				<CTA />
			</main>
			<Footer />
		</>
	)
}
