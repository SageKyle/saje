// import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CTA from './components/home/CTA'
import Hero from './components/home/Hero'
import Intro from './components/home/Intro'
import MyExperience from './components/home/MyExperience'
import Summary from './components/home/Summary'
// import Testimonials from './components/home/Testimonials'
import styles from './page.module.css'

export default function Home() {
	return (
		<>
			{/* <Navbar /> */}
			<main className={styles.main}>
				<Hero />
				<Intro />
				<MyExperience />
				{/* <Testimonials /> */}
				<Summary />
				<CTA />
				<Footer />
			</main>
		</>
	)
}
