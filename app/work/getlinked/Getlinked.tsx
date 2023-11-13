'use client'

import utils from '@/app/assets/styles/utils.module.css'
import style from '@/app/assets/styles/work.module.css'
import { Poppins } from 'next/font/google'
// import Image from 'next/image'
// import Link from 'next/link'
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
				</article>
			</section>
		</section>
	)
}
