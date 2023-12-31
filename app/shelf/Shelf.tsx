'use client'

import style from '@/app/assets/styles/shelf.module.css'
import utils from '@/app/assets/styles/utils.module.css'
import { motion } from 'framer-motion'
import { Poppins } from 'next/font/google'
import Image from 'next/image'

const poppins = Poppins({ weight: '400', subsets: ['latin'] })

export default function Shelf() {
	return (
		<section className={utils.wrapper}>
			<div className={`${utils.container} ${style.container}`}>
				<h2>
					<span className="accent-font">/</span>shelf
					<span style={poppins.style} className="accent-font">
						.
					</span>
				</h2>
				<p>Some of my most popular articles.</p>
				<article className={utils.cardContainer}>
					<motion.a
						initial={{ opacity: 0, y: '50%' }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{
							delay: 0.1,
							duration: 0.51,
						}}
						viewport={{ once: true }}
						layout
						href="https://saje.hashnode.dev/create-reusable-html-components-with-javascript"
						target="_blank"
						rel="noopener noreferrer"
						title="How To Create Reusable HTML Components Using Only JavaScript"
						className={style.card}
					>
						<div className={style.imgContainer}>
							<Image
								src={
									'https://cdn.hashnode.com/res/hashnode/image/upload/v1690492128827/73aa491a-f55c-4005-a92c-ccd0b7e4d151.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp'
								}
								alt="How To Create Reusable HTML Components Using Only JavaScript"
								fill
								loading="lazy"
							/>
						</div>
						<h5 className={`${poppins.className} ${style.title}`}>
							How To Create Reusable HTML Components Using Only JavaScript
						</h5>
					</motion.a>
					<motion.a
						initial={{ opacity: 0, y: '50%' }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{
							delay: 0.2,
							duration: 0.51,
						}}
						viewport={{ once: true }}
						layout
						href="https://saje.hashnode.dev/css-currentcolor"
						target="_blank"
						rel="noopener noreferrer"
						title="CSS currentColor in 3 minutes"
						className={style.card}
					>
						<div className={style.imgContainer}>
							<Image
								src={
									'https://cdn.hashnode.com/res/hashnode/image/upload/v1689719220370/0f677490-44ae-45c5-9a78-ba7d44614a65.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp'
								}
								alt="CSS currentColor in 3 minutes"
								fill
								loading="lazy"
							/>
						</div>
						<h5 className={`${poppins.className} ${style.title}`}>
							CSS currentColor in 3 minutes
						</h5>
					</motion.a>
					<motion.a
						initial={{ opacity: 0, y: '50%' }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{
							delay: 0.3,
							duration: 0.51,
						}}
						viewport={{ once: true }}
						layout
						href="https://saje.hashnode.dev/logical-assignment-operators"
						target="_blank"
						rel="noopener noreferrer"
						title="Understanding logical assignment operators"
						className={style.card}
					>
						<div className={style.imgContainer}>
							<Image
								src={
									'https://cdn.hashnode.com/res/hashnode/image/upload/v1686355909527/64054f61-db9d-42de-842d-e3e36605f464.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp'
								}
								alt="Understanding logical assignment operators"
								fill
								loading="lazy"
							/>
						</div>
						<h5 className={`${poppins.className} ${style.title}`}>
							Understanding logical assignment operators
						</h5>
					</motion.a>
					<motion.a
						initial={{ opacity: 0, y: '50%' }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{
							delay: 0.4,
							duration: 0.51,
						}}
						viewport={{ once: true }}
						layout
						href="https://saje.hashnode.dev/useid-hook"
						target="_blank"
						rel="noopener noreferrer"
						title="useId: an overview of the accessibility hook"
						className={style.card}
					>
						<div className={style.imgContainer}>
							<Image
								src={
									'https://cdn.hashnode.com/res/hashnode/image/upload/v1679941715749/0f4cd797-301b-4610-8666-ab332504fc8e.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp'
								}
								alt="useId: an overview of the accessibility hook"
								fill
								loading="lazy"
							/>
						</div>
						<h5 className={`${poppins.className} ${style.title}`}>
							useId: an overview of the accessibility hook
						</h5>
					</motion.a>
					<motion.a
						initial={{ opacity: 0, y: '50%' }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{
							delay: 0.5,
							duration: 0.51,
						}}
						viewport={{ once: true }}
						layout
						href="https://saje.hashnode.dev/all-about-crash-courses"
						target="_blank"
						rel="noopener noreferrer"
						title="Getting Into Tech: Why A Crash Course Is A Bad Idea"
						className={style.card}
					>
						<div className={style.imgContainer}>
							<Image
								src={
									'https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/W1B2LpQOBxA/upload/67d5e21b94e2cf5169904fdad15abba9.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp'
								}
								alt="Getting Into Tech: Why A Crash Course Is A Bad Idea"
								fill
								loading="lazy"
							/>
						</div>
						<h5 className={`${poppins.className} ${style.title}`}>
							Getting Into Tech: Why A Crash Course Is A Bad Idea
						</h5>
					</motion.a>
				</article>
				<p className={style.linkToBlog}>
					Read more on{' '}
					<a
						href="https://saje.hashnode.dev"
						target="_blank"
						rel="noopener noreferrer"
					>
						my blog
					</a>
				</p>
			</div>
		</section>
	)
}
