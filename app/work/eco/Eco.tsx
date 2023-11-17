'use client'

import utils from '@/app/assets/styles/utils.module.css'
import style from '@/app/assets/styles/work.module.css'
import { Poppins } from 'next/font/google'
// import Image from 'next/image'
// import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FaArrowLeft, FaLink } from 'react-icons/fa6'

const poppins = Poppins({ weight: '400', subsets: ['latin'] })

export default function Eco() {
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
						ECO Africa
					</h1>
				</header>
				<div className={style.sliderContainer}></div>
				<article className={style.textContainer}>
					<p>
						ECO stands for Environment, Community and Organization. The purpose
						of the platform is to connect individuals and organizations in
						Africa to drive sustainability, innovation, and technology by
						partnering with Non-Governmental Organizations (NGOs) and
						individuals to solve problems pertaining to the environment,
						community, and organizations.
					</p>
					<p>
						The company already had a functioning web app but needed to
						restructure the platform to create an entirely new experience,
						improve speed and provide an optimal user experience as the previous
						version had several design and usability flaws.
					</p>
					<p>
						Due to the diversity in professional experience among the team
						members, we settled on using HTML, CSS, and JavaScript for the
						frontend, and Django for the backend. This introduced another
						challenge on how to minimize unnecessary repetition in the codebase
						and also reduce the <em>Round-trip time (RTT)</em>.
					</p>
					<p>
						Based on my solid background in building Single-Page Applications,
						the approach I used in solving this was to use Web Components and
						JavaScript to dynamically render complementary sections of the
						website. This drammatically reduced the{' '}
						<em>Largest Contentful Paint (LCP)</em>, while also keeping the{' '}
						<em>RTT</em> at a minimum.
					</p>
					<p>
						After about six months of work, the frontend was finally completed
						successfully and scheduled to be launched next month. During code
						reviews and tests, it not only met but exceeded the expectations and
						beat the previous version at speed, accessibility and reliabilty.
					</p>
				</article>
			</section>
		</section>
	)
}
