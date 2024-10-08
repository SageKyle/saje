import Styles from '@/app/assets/styles/footer.module.css'
import Link from 'next/link'
import { FaGithub, FaHashnode, FaLinkedin, FaTwitter } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'

export default function Footer() {
	return (
		<footer id="footer" className={Styles.wrapper}>
			<section className={Styles.container}>
				<article className={`${Styles.section}`}>
					<section className={`${Styles.linkGroup}`}>
						<h4 className={`${Styles.linkGroupHeading}`}>Let&apos;s Connect</h4>
						<a
							href="https://twitter.com/ominyi_saje"
							target="_blank"
							rel="noopener noreferrer"
							title="X (Twitter)"
							className={`${Styles.linkItem}`}
						>
							<FaTwitter className={`${Styles.icon}`} />
							<span>X (Twitter)</span>
						</a>

						<a
							href="https://linkedin.com/in/ominyi"
							target="_blank"
							rel="noopener noreferrer"
							title="LinkedIn"
							className={`${Styles.linkItem}`}
						>
							<FaLinkedin className={`${Styles.icon}`} />
							<span>LinkedIn</span>
						</a>
						<a
							href="mailto:ominyi.webdev@gmail.com"
							title="Send me a mail"
							className={`${Styles.linkItem}`}
						>
							<MdEmail className={`${Styles.icon}`} />
							<span>Email</span>
						</a>
					</section>
					<section className={`${Styles.linkGroup}`}>
						<Link href={'/work'} className={`${Styles.linkItem}`}>
							My work
						</Link>
						<Link href={'/shelf'} className={`${Styles.linkItem}`}>
							shelf
						</Link>
						<Link
							href="./docs/resume.pdf"
							target="_blank"
							rel="noreferrer noopener"
							className={`${Styles.linkItem}`}
						>
							My Resume
						</Link>
					</section>
					<section className={`${Styles.linkGroup}`}>
						<Link href={'/contact'} className={`${Styles.linkItem}`}>
							Contact Me
						</Link>
						<Link href={'/about'} className={`${Styles.linkItem}`}>
							About Me
						</Link>
						<a
							href="https://saje.hashnode.dev"
							target="_blank"
							rel="noopener noreferrer"
							className={`${Styles.linkItem}`}
						>
							Blog
						</a>
					</section>
				</article>
				<div className={`${Styles.section}`}>
					<small className={`${Styles.copyright}`}>
						&copy; Paul Saje {new Date().getFullYear()}
					</small>
					<div className={`${Styles.linkIcons}`}>
						<a
							href="https://twitter.com/ominyi_saje"
							target="_blank"
							rel="noopener noreferrer"
							title="X (Twitter)"
						>
							<FaTwitter className={`${Styles.icon}`} />
						</a>

						<a
							href="https://linkedin.com/in/ominyi"
							target="_blank"
							rel="noopener noreferrer"
							title="LinkedIn"
						>
							<FaLinkedin className={`${Styles.icon}`} />
						</a>
						<a
							href="https://github.com/SageKyle"
							target="_blank"
							rel="noopener noreferrer"
							title="Github"
						>
							<FaGithub className={`${Styles.icon}`} />
						</a>
						<a
							href="https://saje.hashnode.dev"
							target="_blank"
							rel="noopener noreferrer"
							title="Blog"
						>
							<FaHashnode className={`${Styles.icon}`} />
						</a>
						<a href="mailto:ominyi.webdev@gmail.com" title="Send me a mail">
							<MdEmail className={`${Styles.icon}`} />
						</a>
					</div>
				</div>
			</section>
		</footer>
	)
}
