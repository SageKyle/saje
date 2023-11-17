'use client'

import utils from '@/app/assets/styles/utils.module.css'
import style from '@/app/assets/styles/work.module.css'
import { Poppins } from 'next/font/google'
// import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FaArrowLeft } from 'react-icons/fa6'

const poppins = Poppins({ weight: '400', subsets: ['latin'] })

export default function Rig() {
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
						Rig Africa
					</h1>
				</header>
				<div className={style.sliderContainer}></div>
				<article className={style.textContainer}>
					<p>
						Rig Africa is a branch of the Rig Nation religious organization. The
						web app provides a platform for the church to showcase up-to-date
						information about their activities and events, a
						partner&apos;s/donation&apos;s page to keep track of
						payments/donations on the platform, including a partners
						profile/dashboard, and also a merch store to showcase the different
						products offered by the church.
					</p>
				</article>
			</section>
		</section>
	)
}
