import styles from '@/app/page.module.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import About from './About'
import MyTools from './MyTools'

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
