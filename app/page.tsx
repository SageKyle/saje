import Navbar from './components/Navbar'
import styles from './page.module.css'

export default function Home() {
	return (
		<>
			<Navbar />
			<main className={styles.main}>
				<h1>Frontend Developer</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam est
					iste possimus doloribus rerum. Animi deserunt in quo doloremque
					voluptate sapiente atque odio aut error sequi veritatis, eius
					perspiciatis illum dolore, laudantium a officia cumque! At harum
					doloribus aliquam fuga consectetur quaerat minus, maiores neque
					laborum ipsum dicta adipisci ex!
				</p>
			</main>
		</>
	)
}
