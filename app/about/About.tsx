import Image from 'next/image'
// import Link from 'next/link'

import Avatar from '@/app/assets/images/saje.jpg'
import Style from '@/app/assets/styles/hero.module.css'
import utils from '@/app/assets/styles/utils.module.css'

export default function About() {
	return (
		<section aria-label="hero section" className={Style.wrapper}>
			<div className={Style.container}>
				{/* <Navbar /> */}
				<div className={Style.hero}>
					<article className={Style.heroTxt}>
						<h1 className={Style.title}>
							About me<span>.</span>
						</h1>
						<p className={Style.intro}>
							I specialize in building and launching dynamic user interfaces and
							experiences that captivate both clients and companies. I harness
							the power of the latest technologies and design systems to create
							interactive solutions that leave a lasting impression. My primary
							objective is to deliver the best, easiest, and most functional
							long-term solutions that not only meet the requirements of the
							company but also exceed the expectations of clients. With a strong
							commitment to user satisfaction, I strive to create seamless and
							engaging experiences that seamlessly blend aesthetic appeal with
							practical functionality.
						</p>
						<div className={Style.btnContainer}>
							<a
								href="mailto:ominyi.webdev@gmail.com"
								className={utils.primaryBtn}
							>
								contact me
							</a>
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
			</div>
		</section>
	)
}
