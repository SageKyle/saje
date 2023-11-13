import styles from '@/app/page.module.css'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import CTA from '../../components/home/CTA'
import Getlinked from './Getlinked'

export default function Page() {
	return (
		<>
			<Navbar />
			<main className={styles.main}>
				<Getlinked />
				<CTA />
			</main>
			<Footer />
		</>
	)
}
