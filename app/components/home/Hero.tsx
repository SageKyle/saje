import Avatar from '@/app/assets/images/saje-avatar.png'
import Style from '@/app/assets/styles/hero.module.css'
import { Poppins } from 'next/font/google'
import Image from 'next/image'
import { AiFillLinkedin } from 'react-icons/ai'
import { FaHashnode, FaXTwitter } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import Navbar from '../Navbar'

const poppins = Poppins({ weight: '400', subsets: ['latin'] })

export default function Hero() {
	return (
		<>
			<section aria-label="hero section" className={Style.wrapper}>
				<div className={Style.container}>
					<Navbar />
					<div className={Style.hero}>
						<article className={Style.heroTxt}>
							<h1 className={Style.title}>
								Frontend Developer<span style={poppins.style}>.</span>
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
					<article className={Style.heroFooter}>
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
						<div className={Style.ScrollAnim} aria-hidden></div>
					</article>
				</div>
			</section>
		</>
	)
}
