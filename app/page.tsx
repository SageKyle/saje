// import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CTA from './components/home/CTA'
import Hero from './components/home/Hero'
import Intro from './components/home/Intro'
import MyExperience from './components/home/MyExperience'
import Summary from './components/home/Summary'
import styles from './page.module.css'

export default function Home() {
	return (
		<main className={styles.main}>
			<Hero />
			<Intro />
			<MyExperience />
			<Summary />
			<CTA />
			<Footer />
		</main>
	)
}
