import styles from '@/app/page.module.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import CTA from '../components/home/CTA'
import Work from './Work'

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
