import style from '@/app/assets/styles/about.module.css'
import { Poppins } from 'next/font/google'
import Image from 'next/image'
import { technologies } from '../lib/SkillsObj'

const poppins = Poppins({ weight: '400', subsets: ['latin'] })

export default function MyTools() {
	return (
		<section
			id="my-tools"
			className={style.wrapper}
			aria-label="a list of technologies and tools I've worked with"
		>
			<div className={style.container}>
				<h2 className={style.heading} style={poppins.style}>
					Technologies I Use
				</h2>
				<p className={style.intro}>
					some top technologies I have used over the years.
				</p>
				<article className={style.cardContainer}>
					{technologies.map((technology) => (
						<div
							className={style.card}
							key={technology.name}
							title={technology.name}
						>
							<div className={style.iconContainer}>
								<Image
									src={technology.logo}
									className={style.icon}
									alt={technology.name}
									fill
									loading="lazy"
								/>
							</div>
							<h6 className={style.skillText}>{technology.name}</h6>
						</div>
					))}
				</article>
			</div>
		</section>
	)
}
