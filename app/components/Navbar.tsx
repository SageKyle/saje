'use client'

import { Poppins } from 'next/font/google'
import Link from 'next/link'
import { useState } from 'react'
import { MdMenu } from 'react-icons/md'
import Styles from '../assets/styles/navbar.module.css'
import { navLinks } from '../lib/navLinksObj'

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
						href={'https://saje.hashnode.dev'}
						target="_blank"
						rel="noreferrer noopener"
						className={Styles.navLink}
					>
						blog
					</a>
					<a
						href="https://docs.google.com/document/d/1wg43AyIUQ81EnfTUH9AtWXp4sK_zgF7eX5h3d3jkNug/"
						target="_blank"
						rel="noreferrer noopener"
						className={Styles.active}
						style={poppins.style}
					>
						my resume
					</a>
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
