'use client'

import utils from '@/app/assets/styles/utils.module.css'
import style from '@/app/assets/styles/work.module.css'
import Carousel from '@/app/helpers/carousel'
import { getlinkedImages } from '@/app/lib/projectImgObj'
import { Poppins } from 'next/font/google'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
	FaArrowLeft,
	FaArrowUpRightFromSquare,
	FaGithub,
} from 'react-icons/fa6'

const poppins = Poppins({ weight: '400', subsets: ['latin'] })

export default function Getlinked() {
	const router = useRouter()
	function goBack(): void {
		router.back()
	}

	return (
		<section className={utils.wrapper}>
			<section className={`${utils.container} ${style.container}`}>
				<header className={style.header}>
					<FaArrowLeft
						className={style.backIcon}
						title="Back to previous page"
						role="navigation"
						onClick={goBack}
					/>
					<h1 className={style.title} style={poppins.style}>
						GetLinked Pre-Hackathon Website
					</h1>
					<div className={style.linkGroup} aria-label="relevant links">
						<a
							href="https://getlinked-v0.netlify.app/"
							target="_blank"
							rel="noopener noreferrer"
							title="Go to site"
							className={`${style.icon}`}
						>
							<FaArrowUpRightFromSquare />
						</a>
						<a
							href="https://github.com/SageKyle/getlinked"
							target="_blank"
							rel="noopener noreferrer"
							title="View on GitHub"
							className={`${style.icon}`}
						>
							<FaGithub />
						</a>
					</div>
				</header>
				<Carousel
					imgObj={getlinkedImages}
					label="carousel containing screenshots from getlinked website project"
				/>
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
			</section>
		</section>
	)
}
