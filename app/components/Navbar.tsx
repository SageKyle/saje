'use client'

// import { motion } from 'framer-motion'
import utils from '@/app/assets/styles/utils.module.css'
import { Poppins } from 'next/font/google'
import Link from 'next/link'
import { useState } from 'react'
import { MdMenu } from 'react-icons/md'
import Styles from '../assets/styles/navbar.module.css'
import { navLinks } from '../helpers/navLinksObj'

const poppins = Poppins({ weight: '400', subsets: ['latin'] })

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false)

	function toggleNavbar(): void {
		setIsOpen((prev) => !prev)
	}
	return (
		<header className={Styles.wrapper}>
			<section className={Styles.container}>
				<Link href={'/'} className={Styles.logo}>
					p<span>s</span>
				</Link>

				<nav className={`${Styles.navbar} ${isOpen ? Styles.mobileNav : ''}`}>
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
					<button className={Styles.active} style={poppins.style}>
						my resume
					</button>
				</nav>
				{/* <button className="primary-btn">contact</button> */}

				<MdMenu
					className={Styles.navToggle}
					role="button"
					aria-label="navigation toggle"
					onClick={toggleNavbar}
				/>
			</section>
		</header>
	)
}
