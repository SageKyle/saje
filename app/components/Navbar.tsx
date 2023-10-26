'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import DarkModeIcon from '../assets/icons/dark_mode.svg'
import LightModeIcon from '../assets/icons/light_mode.svg'
import PauseIcon from '../assets/icons/pause.svg'
import PlayIcon from '../assets/icons/play.svg'
import Styles from '../assets/styles/navbar.module.css'

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
			<h1 className={Styles.logo}>
				p<span>s</span>
			</h1>
			<div className={Styles.toggleContainer} onClick={toggleAnimation}>
				{showAnimation && (
					<Image
						src={PauseIcon}
						fill
						loading="lazy"
						className={`${Styles.toggleIcon} ${Styles.animate}`}
						alt="toggle animations"
					/>
				)}

				{!showAnimation && (
					<Image
						src={PlayIcon}
						fill
						loading="lazy"
						className={`${Styles.toggleIcon} ${Styles.animate}`}
						alt="toggle animations"
					/>
				)}
			</div>
			<div className={Styles.toggleContainer} onClick={toggleTheme}>
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
			</div>
			<div
				className={Styles.navToggle}
				role="button"
				aria-label="navigation toggle"
				onClick={toggleNavbar}
			></div>

			{isOpen && (
				<nav className={Styles.navbar}>
					<Link href={'/'} className={Styles.navLink}>
						home
					</Link>
					<Link href={'/work'} className={Styles.navLink}>
						my work
					</Link>
					<Link href={'/about'} className={Styles.navLink}>
						about
					</Link>
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
