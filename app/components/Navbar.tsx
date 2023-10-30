'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import DarkModeIcon from '../assets/icons/dark_mode.svg'
import LightModeIcon from '../assets/icons/light_mode.svg'
import PauseIcon from '../assets/icons/pause.svg'
import PlayIcon from '../assets/icons/play.svg'
import Styles from '../assets/styles/navbar.module.css'
import AnimationInfoPopup from '../helpers/animationInfoPopup'
import { navLinks } from '../helpers/navLinksObj'

export default function Navbar() {
	const [darkMode, setDarkMode] = useState(true)
	const [showAnimation, setShowAnimation] = useState(true)
	const [isOpen, setIsOpen] = useState(false)

	function toggleTheme(): void {
		setDarkMode((prev) => !prev)
	}

	function toggleNavbar(): void {
		setIsOpen((prev) => !prev)
	}

	function toggleAnimation(): void {
		setShowAnimation((prev) => !prev)
	}

	return (
		<header className={Styles.container}>
			<Link href={'/'} className={Styles.logo}>
				p<span>s</span>
			</Link>
			<section
				className={Styles.iconWrapper}
				aria-label="animation and theme toggle container"
			>
				<div
					className={`${Styles.toggleContainer} ${Styles.animationWrapper}`}
					onClick={toggleAnimation}
					aria-describedby="animation-info"
				>
					{showAnimation && (
						<motion.div
							whileTap={{ y: '50%' }}
							transition={{ duration: 1, delay: 0.3 }}
							className=""
						>
							<Image
								src={PauseIcon}
								fill
								loading="lazy"
								className={`${Styles.toggleIcon} ${Styles.animate}`}
								alt="toggle animations"
							/>
						</motion.div>
					)}

					{!showAnimation && (
						<motion.div
							whileTap={{ y: '50%' }}
							transition={{ duration: 1, delay: 0.3 }}
							className=""
						>
							<Image
								src={PlayIcon}
								fill
								loading="lazy"
								className={`${Styles.toggleIcon} ${Styles.animate}`}
								alt="toggle animations"
							/>
						</motion.div>
					)}
					<AnimationInfoPopup />
				</div>
				{/* <div className={Styles.toggleContainer} onClick={toggleTheme}>
					{darkMode && (
						<Image
							src={LightModeIcon}
							fill
							loading="lazy"
							className={`${Styles.toggleIcon} ${Styles.light}`}
							alt="toggle theme"
						/>
					)}

					{!darkMode && (
						<Image
							src={DarkModeIcon}
							fill
							loading="lazy"
							className={`${Styles.toggleIcon} ${Styles.dark}`}
							alt="toggle theme"
						/>
					)}
				</div> */}
			</section>
			<div
				className={Styles.navToggle}
				role="button"
				aria-label="navigation toggle"
				onClick={toggleNavbar}
			></div>

			{isOpen && (
				<nav className={Styles.navbar}>
					{navLinks.map((link) => (
						<Link
							key={link.text.trim()}
							href={link.link}
							className={Styles.navLink}
						>
							{link.text}
						</Link>
					))}
					<a
						href={'https:saje.hashnode.dev'}
						target="_blank"
						rel="noreferrer noopener"
						className={Styles.navLink}
					>
						blog
					</a>
					<button className="primary-btn">my resume</button>
				</nav>
			)}
			{/* <button className="primary-btn">contact</button> */}
		</header>
	)
}
