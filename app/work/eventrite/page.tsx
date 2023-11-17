import styles from '@/app/page.module.css'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import CTA from '../../components/home/CTA'
import Eventrite from './Eventrite'

export default function Page() {
	return (
		<>
			<Navbar />
			<main className={styles.main}>
				<Eventrite />
				<CTA />
			</main>
			<Footer />
		</>
	)
}
