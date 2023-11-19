import style from '@/app/assets/styles/playground.module.css'
import utils from '@/app/assets/styles/utils.module.css'
import { Poppins } from 'next/font/google'
import { FaGithub, FaLink } from 'react-icons/fa6'
import { playgroundObj } from '../lib/PlaygroundObj'

const poppins = Poppins({ weight: '400', subsets: ['latin'] })

export default function Playground() {
	return (
		<section className={utils.wrapper}>
			<div className={`${utils.container} ${style.container}`}>
				<h2 className={style.heading}>
					<span className="accent-font">/</span>playground
					<span style={poppins.style} className="accent-font">
						.
					</span>
				</h2>
				<p className={style.intro}>
					My approach to learning is to build projects.
					<br />
					Here are some projects that helped me get a good graps of some
					technical concepts.
				</p>
				<article className={style.cardContainer}>
					{playgroundObj.map((project) => (
						<div key={project.href} className={style.card} title={project.name}>
							<h4 className={style.title}>{project.name}</h4>
							<small className={style.description}>{project.desc}</small>
							<div className={style.tagContainer}>
								{project.tags.map((tag) => (
									<span key={tag} className={style.tag}>
										{tag}
									</span>
								))}
							</div>
							<a
								href={`https://github.com/SageKyle/${project.href}`}
								target="_blank"
								rel="noopener noreferrer"
								title="View on GitHub"
								className={style.linkContainer}
							>
								<FaGithub className={style.icon} />
								<span className={style.link}>{project.href}</span>
							</a>
							{project.link && (
								<a
									href={`https://${project.link}`}
									target="_blank"
									rel="noopener noreferrer"
									className={style.linkContainer}
								>
									<FaLink className={style.icon} />
									<span className={style.link}>{project.link}</span>
								</a>
							)}
						</div>
					))}
				</article>
				<a
					href="https://github.com/SageKyle"
					target="_blank"
					rel="noopener noreferrer"
					className={style.link}
				>
					View more on GitHub
				</a>
			</div>
		</section>
	)
}
