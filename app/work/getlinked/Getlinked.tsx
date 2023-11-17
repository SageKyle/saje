'use client'

import utils from '@/app/assets/styles/utils.module.css'
import style from '@/app/assets/styles/work.module.css'
import { Poppins } from 'next/font/google'
// import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FaArrowLeft } from 'react-icons/fa6'

const poppins = Poppins({ weight: '400', subsets: ['latin'] })

export default function Getlinked() {
	const router = useRouter()
	function goBack(): void {
		router.back()
	}

	return (
		<section className={utils.wrapper}>
			<section className={utils.container}>
				<header className={style.header}>
					<FaArrowLeft
						className={utils.icon}
						title="Back to previous page"
						role="navigation"
						onClick={goBack}
					/>
					<h1 className={style.title} style={poppins.style}>
						GetLinked Pre-Hackathon Website
					</h1>
				</header>
				<div className={style.sliderContainer}></div>
				<article className={style.textContainer}>
					<p>
						Getlinked tech hackathon{' '}
						<em>
							&ldquo; is a melting pot of visionaries, and its purpose is as
							clear as day: to shape the future. Whether you&apos;re a coding
							genius, a design maverick, or a concept wizard, you&apos;ll have
							the chance to transform your ideas into reality. Solving
							real-world problems, pushing the boundaries of technology, and
							creating solutions that can change the world, that&apos;s what
							we&apos;re all about!&rdquo;
						</em>
					</p>
					<p>
						The pre-hackathon coding challenge was meant to spur developers to
						express their creativity based on provided designs and
						specifications.
					</p>
					<p>
						Even though I was unable to participate in the competition, I
						decided to work on the project to showcase my ability to adhere to
						design requirements, and creativity.
					</p>
					<p>
						The website features a lot of buttery-smooth animations and colorful
						designs.
					</p>
				</article>
				<aside className={style.aside} aria-describedby="aside-heading">
					<h4 className={style.asideHeading} id="aside-heading">
						Related links
					</h4>
					<ul>
						<li>
							<a
								href="https://github.com/SageKyle/getlinked"
								target="_blank"
								rel="noopener noreferrer"
								className={`${style.link}`}
							>
								View on GitHub
							</a>
						</li>
						<li>
							<a
								href="https://getlinked-v0.netlify.app/"
								target="_blank"
								rel="noopener noreferrer"
								className={`${style.link}`}
							>
								website
							</a>
						</li>
						<li>
							<Link href={'/playground'} className={style.link}>
								My playground
							</Link>
						</li>
					</ul>
				</aside>
			</section>
		</section>
	)
}
