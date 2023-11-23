import styles from '@/app/page.module.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import CTA from '../components/home/CTA'

export default function page() {
	return (
		<>
			<Navbar />
			<main className={styles.main}>
				{/* <Hero /> */}
				<CTA />
			</main>
			<Footer />
		</>
	)
}
