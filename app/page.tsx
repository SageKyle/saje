// import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import CTA from './components/home/CTA'
import Hero from './components/home/Hero'
import Intro from './components/home/Intro'
import MyExperience from './components/home/MyExperience'
// import MyTools from './components/home/MyTools'
// import Summary from './components/home/Summary'
import styles from './page.module.css'

export default function Home() {
	return (
		<main className={styles.main}>
			<Navbar />
			<Hero />
			{/* <MyTools /> */}
			<Intro />
			<MyExperience />
			{/* <Summary /> */}
			<CTA />
			<Footer />
		</main>
	)
}
