'use client'

import utils from '@/app/assets/styles/utils.module.css'
import style from '@/app/assets/styles/work.module.css'
import { Poppins } from 'next/font/google'
// import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
	FaArrowLeft,
	FaArrowUpRightFromSquare,
	FaGithub,
} from 'react-icons/fa6'

const poppins = Poppins({ weight: '400', subsets: ['latin'] })

export default function TenBits() {
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
						TenBits Business management system
					</h1>
					<div className={style.linkGroup}>
						<a
							href="https://tenbits.vercel.app"
							target="_blank"
							rel="noopener noreferrer"
							title="coming-soon page"
							className={`${style.icon}`}
						>
							<FaArrowUpRightFromSquare />
						</a>
						<a
							href="https://github.com/SageKyle/tenbits"
							target="_blank"
							rel="noopener noreferrer"
							title="View on GitHub"
							className={`${style.icon}`}
						>
							<FaGithub />
						</a>
					</div>
				</header>
				<div className={style.sliderContainer}></div>
				<article className={style.textContainer}></article>
				<p>
					The TenBits e-Store is e-commerce management system designed
					specifically to help small businesses scale their business online by
					making it very easy for them to create and customize their own online
					store without any technical knowledge.
				</p>
				<p>
					The purpose is to help business owners who cannot afford a
					custom-built e-commerce web app, by providing pre-built templates and
					all the tools they need to setup their online presence.
				</p>
				<br />
				<h4>Coming soon...</h4>
			</section>
		</section>
	)
}
