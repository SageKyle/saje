import style from '@/app/assets/styles/projects.module.css'
import utils from '@/app/assets/styles/utils.module.css'
import Link from 'next/link'

export default function Projects() {
	return (
		<section className={utils.wrapper}>
			<div className={`${utils.container} ${style.container}`}>
				<h2>
					/work<span>.</span>
				</h2>
				<p>Selected work I&apos;ve taken on in the past.</p>
				<article className={style.projectContainer}>
					<Link href={'/eco'}>ECO Africa</Link>
					<Link href={'/eventrite'}>Eventrite</Link>
					<Link href={'/getlinked'}>GetLinked</Link>
					<Link href={'/ontrac'}>ontrac</Link>
					<Link href={'/rig'}>RIG Africa</Link>
					<Link href={'/tenbits'}>TenBits</Link>
				</article>
			</div>
		</section>
	)
}
