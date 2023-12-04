'use client'

import Avatar from '@/app/assets/images/saje.png'
import Style from '@/app/assets/styles/hero.module.css'
import utils from '@/app/assets/styles/utils.module.css'
import { Poppins, Public_Sans } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'

const sans = Public_Sans({ weight: '600', subsets: ['latin'] })
const poppins = Poppins({ weight: '400', subsets: ['latin'] })

export default function Hero() {
	const [scrollY, setScrollY] = useState(0)
	const isVisible = scrollY < 200 ? 'flex' : 'none'

	const onScroll = useCallback(() => {
		setScrollY(window.scrollY)
	}, [])

	useEffect(() => {
		//add eventlistener to window
		window.addEventListener('scroll', onScroll, { passive: true })
		// remove event on unmount to prevent a memory leak with the cleanup
		return () => {
			window.removeEventListener('scroll', onScroll)
		}
	}, [onScroll])

	return (
		<>
			<section aria-label="hero section" className={Style.wrapper}>
				<div className={Style.container} onScroll={onScroll}>
					<div className={Style.hero}>
						<article className={Style.heroTxt}>
							<h1 className={Style.heading}>Frontend Engineer</h1>
							<h1 className={Style.title} style={sans.style}>
								I build accessible,
								<br /> performant websites
								<span className={poppins.className}>.</span>
							</h1>
							<p className={Style.intro}>
								<strong>Hi there! </strong> I&apos;m Paul Saje. I am a frontend
								engineer with a unique proficiency for building quality,
								accessible, and user-friendly web applications, with a focus on
								usability and a touch of maintainability. I&apos;m currently
								available for full-time and contract developer roles.
							</p>
							<div className={Style.btnContainer}>
								<a
									href="mailto:ominyi.webdev@gmail.com"
									className={utils.primaryBtn}
								>
									contact me
								</a>
								<Link
									href="./docs/resume.pdf"
									target="_blank"
									rel="noreferrer noopener"
									download={true}
									className={utils.secondaryBtn}
									title="Download my resume"
								>
									<span>resume</span>
									<svg
										width="17"
										height="17"
										viewBox="0 0 17 17"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										className={utils.icon}
									>
										<path
											d="M1.55908 12.0276V12.9095C1.55908 13.6112 1.83782 14.2841 2.33398 14.7803C2.83014 15.2764 3.50307 15.5552 4.20475 15.5552H13.0236C13.7253 15.5552 14.3982 15.2764 14.8944 14.7803C15.3906 14.2841 15.6693 13.6112 15.6693 12.9095V12.0276M12.1417 8.50006L8.61419 12.0276M8.61419 12.0276L5.08664 8.50006M8.61419 12.0276V1.44495"
											stroke="currentColor"
											strokeWidth="2.64567"
											strokeLinecap="round"
											strokeLinejoin="round"
										></path>
									</svg>
								</Link>
							</div>
						</article>
						<section className={Style.heroImg}>
							<Image
								src={Avatar}
								alt="Paul Saje avatar"
								loading="lazy"
								fill
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							/>
						</section>
					</div>
					<article className={Style.heroFooter} style={{ display: isVisible }}>
						<div className={Style.ScrollAnim} aria-hidden="true"></div>
					</article>
				</div>
			</section>
		</>
	)
}
// In a world of pixels and code, I&apos;m the frontend alchemist
// who transforms your ideas into web gold. From JavaScript sorcery
// to Next.js wizardry, I&apos;m here to make it magical.
