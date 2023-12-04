'use client'

import utils from '@/app/assets/styles/utils.module.css'
import style from '@/app/assets/styles/work.module.css'
import Carousel from '@/app/helpers/carousel'
import { ontracImages } from '@/app/lib/projectImgObj'
import { Poppins } from 'next/font/google'
import { useRouter } from 'next/navigation'
import {
	FaArrowLeft,
	FaArrowUpRightFromSquare,
	FaGithub,
} from 'react-icons/fa6'

const poppins = Poppins({ weight: '400', subsets: ['latin'] })

export default function OnTrac() {
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
						OnTrac Personal Task Tracker
					</h1>
					<div className={style.linkGroup} aria-label="relevant links">
						<a
							href="https://ontrac.netlify.app"
							target="_blank"
							rel="noopener noreferrer"
							title="Go to site"
							className={`${style.icon}`}
						>
							<FaArrowUpRightFromSquare />
						</a>
						<a
							href="https://github.com/SageKyle/ontrac"
							target="_blank"
							rel="noopener noreferrer"
							title="View on GitHub"
							className={`${style.icon}`}
						>
							<FaGithub />
						</a>
					</div>
				</header>
				<Carousel imgObj={ontracImages} label="ontrac project image carousel" />
				<article className={style.textContainer}>
					<p>
						OnTrac is an intuitively simple personal manager that makes it
						easier for you to manage your time.
					</p>
					<div>
						<p>I had two reasons for working on the project:</p>
						<ol>
							<li>
								I wanted to build a project that solves a problem I&apos;ve been
								facing – making it easier for me to jot down those wild and
								interesting ideas whenever they pop up.
							</li>

							<li>
								Showcase my skills as a software engineer through not just what
								I build, but also how I build it.
							</li>
						</ol>
						<ul>
							{' '}
							To achieve this, some of my top considerations were:
							<li>optimization</li>
							<li>readability</li>
							<li>maintainability &</li>
							<li>performance</li>
						</ul>
						<p>
							one specific metric I set was that, if I show any developer the
							code, they should be able to start contributing after going
							through the code for 30 minutes, without me providing any
							explanation – so far as they possess relevant knowledge of the
							technologies used. (if you&apos;re a developer, you probably
							understand my reason for this metric).
						</p>
						<p>
							The project was built with React, styled using Tailwind CSS, and
							Firebase for cloud storage and authentication.
						</p>
						<p>
							Since I built it primarily for myself, I was able to easily spot
							any section that did not work as intended.
						</p>
						<p>
							Interestingly, I got a contract job and had to pause the project
							for over 3 months. When I resumed the project, it took me exactly
							15 minutes to go through the codebase and remember where I
							stopped. perhaps this might just be because I&apos;m the only one
							working on this; but a similar experience on older projects took
							me considerably longer time; which is a proof that the project
							delivered excellently on the aspect of being developer-friendly
						</p>
						<p>
							I have also been using the web app since I completed it, which is
							a testament of how really useful it has been to me personally.
						</p>
						<ul>
							<p>Here are some of the features of the web app:</p>
							<li>
								<strong>Guest Mode</strong> to allow you log in and experience
								all the features of the app before creating an account.
							</li>
							<li>
								<strong>Add, Edit, and Delete Notes</strong> Write long-form
								content and easily access and modify it from anywhere, on any
								device that has access to the internet.
							</li>
							<li>
								<strong>Star a Note/Task</strong> to mark it as important, and
								always have it appear before others.
							</li>
						</ul>
					</div>
				</article>
			</section>
		</section>
	)
}
