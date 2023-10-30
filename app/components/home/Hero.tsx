import Avatar from '@/app/assets/images/saje_avatar.png'
import Style from '@/app/assets/styles/hero.module.css'
import Image from 'next/image'
import { AiFillLinkedin } from 'react-icons/ai'
import { FaHashnode, FaXTwitter } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import Navbar from '../Navbar'

export default function Hero() {
	return (
		<>
			<section aria-label="hero section" className={Style.container}>
				<Navbar />
				<div className={Style.hero}>
					<article>
						<h1>Frontend Developer.</h1>
						<br />
						{/* <p>
							I like to craft solid and scalable frontend products with great
							user experiences.
						</p> */}
						<p>
							In a world of pixels and code, I&apos;m the frontend alchemist who
							transforms your ideas into web gold. From JavaScript sorcery to
							Next.js wizardry, I&apos;m here to make it magical.
						</p>
					</article>

					<Image
						src={Avatar}
						alt="Paul Saje avatar"
						loading="lazy"
						width={300}
						height={350}
					/>
				</div>
				<div
					className={Style.socialGroup}
					aria-description="social media icons"
				>
					<a
						href="https://twitter.com/Ominyi_Saje"
						target="_blank"
						title="X (Twitter)"
						rel="noopener noreferrer"
						className={Style.socialItem}
					>
						<FaXTwitter />
					</a>
					<a
						href="https://linkedin.com/in/ominyi"
						target="_blank"
						title="LinkedIn"
						rel="noopener noreferrer"
						className={Style.socialItem}
					>
						<AiFillLinkedin />
					</a>
					<a
						href="mailto:ominyi.webdev@gmail.com"
						title="Send me a mail"
						className={Style.socialItem}
					>
						<MdEmail />
					</a>
					<a
						href="https://saje.hashnode.dev"
						target="_blank"
						title="My blog"
						rel="noopener noreferrer"
						className={Style.socialItem}
					>
						<FaHashnode />
					</a>
				</div>
			</section>
		</>
	)
}
