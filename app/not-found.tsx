import Icon from '@/app/assets/icons/404-page-not-found.svg'
import styles from '@/app/assets/styles/not-found.module.css'
import utils from '@/app/assets/styles/utils.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function page() {
	return (
		<main className={utils.wrapper}>
			<section className={styles.container}>
				<div className={styles.imgContainer}>
					<Image src={Icon} alt="page not found" fill loading="lazy" />
				</div>
				<h1 className={styles.title}>Page Not Found</h1>
				<p className={styles.desc}>Oops!... Seems you got the wrong link.</p>
				<Link href={'/'} className={utils.secondaryBtn}>
					Back to home
				</Link>
			</section>
		</main>
	)
}
