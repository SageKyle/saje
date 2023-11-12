import utils from '@/app/assets/styles/utils.module.css'
import style from '@/app/assets/styles/work.module.css'
import { Poppins } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { FaLink } from 'react-icons/fa6'
import { workData } from '../helpers/workLinksObj'

const poppins = Poppins({ weight: '400', subsets: ['latin'] })

export default function Work() {
	return (
		<section className={utils.wrapper}>
			<div className={`${utils.container} ${style.container}`}>
				<h2>
					/work<span style={poppins.style}>.</span>
				</h2>
				<p>
					Selected work I&apos;ve taken on in the past, that have also
					contributed to shaping my career.
				</p>
				<article className={utils.cardContainer}>
					{workData.map((work) => (
						<div
							key={work.href}
							className={style.card}
							aria-description="a card showcasing individual project/work I've worked on or participated in"
							title={work.name}
						>
							<Link href={work.href} className={style.mainContent}>
								<div className={style.imgContainer}>
									<Image src={work.logo} alt={work.name} fill loading="lazy" />
								</div>
								<h5 className={style.title}>{work.name}</h5>
							</Link>
							{work.link && (
								<div className={style.linkContainer}>
									{' '}
									<FaLink className={style.icon} />
									<a href={work.link} target="_blank" className={style.link}>
										{work.link}
									</a>
								</div>
							)}
							<small className={style.flag}>{work.flag}</small>
						</div>
					))}
				</article>
			</div>
		</section>
	)
}
