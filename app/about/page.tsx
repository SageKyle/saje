import styles from '@/app/page.module.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import MyTools from '../components/home/MyTools'
import About from './About'

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
