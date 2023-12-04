'use client'

import utils from '@/app/assets/styles/utils.module.css'
import style from '@/app/assets/styles/work.module.css'
import { motion } from 'framer-motion'
import { Poppins } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { FaLink } from 'react-icons/fa6'
import { workData } from '../lib/workLinksObj'

const poppins = Poppins({ weight: '400', subsets: ['latin'] })

export default function Work() {
	return (
		<section className={utils.wrapper}>
			<div className={`${utils.container} ${style.container}`}>
				<h2>
					<span className="accent-font">/</span>work
					<span style={poppins.style} className="accent-font">
						.
					</span>
				</h2>
				<p className={style.intro}>
					Selected work I&apos;ve taken on in the past, that have also
					contributed to shaping my career.
				</p>
				<article className={utils.cardContainer}>
					{workData.map((work, index) => (
						<motion.div
							initial={{ opacity: 0, y: '50%' }}
							whileInView={{ y: 0, opacity: 1 }}
							transition={{
								delay: index / 2,
								duration: 0.51,
							}}
							viewport={{ once: true }}
							layout
							key={work.href}
							className={style.card}
							aria-description="a card showcasing individual project/work I've worked on or participated in"
							title={work.name}
						>
							<Link href={`work/${work.href}`} className={style.mainContent}>
								<div className={style.imgContainer}>
									<Image src={work.logo} alt={work.name} fill loading="lazy" />
								</div>
								<h5 className={style.title}>{work.name}</h5>
							</Link>
							{work.link && (
								<div className={style.linkContainer}>
									{' '}
									<FaLink className={style.icon} />
									<a
										href={`https://${work.link}`}
										target="_blank"
										rel="noopener noreferrer"
										className={style.link}
									>
										{work.link}
									</a>
								</div>
							)}
						</motion.div>
					))}
				</article>
				<aside className={style.aside} aria-describedby="aside-heading">
					<h4 className={style.asideHeading} id="aside-heading">
						Related links
					</h4>
					<ul>
						<li>
							<Link href={'/playground'} className={style.link}>
								My playground
							</Link>
						</li>
						<li>
							<a
								href="https://github.com/SageKyle"
								target="_blank"
								rel="noopener noreferrer"
								className={`${style.link}`}
							>
								Check out my GitHub
							</a>
						</li>
					</ul>
				</aside>
			</div>
		</section>
	)
}
