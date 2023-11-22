'use client'

import Avatar from '@/app/assets/images/saje-avatar.png'
import Style from '@/app/assets/styles/hero.module.css'
import { Poppins } from 'next/font/google'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'

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
					{/* <Navbar /> */}
					<div className={Style.hero}>
						<article className={Style.heroTxt}>
							<h1 className={Style.title}>
								Frontend Developer<span>.</span>
							</h1>
							<p className={Style.intro}>
								In a world of pixels and code, I&apos;m the frontend alchemist
								who transforms your ideas into web gold. From JavaScript sorcery
								to Next.js wizardry, I&apos;m here to make it magical.
							</p>
						</article>
						<section className={Style.heroImg}>
							<Image src={Avatar} alt="Paul Saje avatar" loading="lazy" fill />
						</section>
					</div>
					<article className={Style.heroFooter} style={{ display: isVisible }}>
						<div className={Style.ScrollAnim} aria-hidden></div>
					</article>
				</div>
			</section>
		</>
	)
}
