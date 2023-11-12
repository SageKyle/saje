import styles from '@/app/page.module.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import CTA from '../components/home/CTA'
import Shelf from './Shelf'

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
