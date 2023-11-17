'use client'

import PrimaryBtn from '@/app/utils/PrimaryBtn'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Styles from '../../assets/styles/summarySection.module.css'

export default function Summary() {
	const ref = useRef<HTMLDivElement>(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['0 1', '1.33 1'],
	})
	const scaleX = useTransform(scrollYProgress, [0, 1], [0.8, 1])

	return (
		<section id="summary" className={Styles.wrapper}>
			<motion.div
				ref={ref}
				style={{ scale: scaleX, opacity: scaleX }}
				className={Styles.container}
				aria-label="a roundup of what I do including their links"
			>
				<article className={Styles.section}>
					<h5 className={Styles.sectionHeading}>I build stuff</h5>
					<p className={Styles.sectionTxt}>
						<em>I&apos;m passionate about tech!</em> You&apos;ve probably heard
						this, way too may times; but I&apos;m not just passionate about tech
						itself, I am very curious about what tech can do— how much can we
						achieve using tech? And this was what intrigued and brought me to
						ECO.
						<br />
						My approach to learning is to actively build projects. I love to
						build stuff, to go behind the scene and understand how the tool
						works...
					</p>
					<PrimaryBtn text="read more" href="/engineering" />
				</article>
				<article className={Styles.section}>
					<h5 className={Styles.sectionHeading}>I love to write</h5>
					<p className={Styles.sectionTxt}>
						Over the years, technical writing has provided a way for me to go
						deeper into any topic, and satisfy my curiousity about that tool,
						while also sharing the knowledge with others.
						<br />
						<br />
						<em>It&apos;s always a win-win-win! (~_^)</em>
					</p>
					<PrimaryBtn text="my shelf" href="/shelf" />
				</article>
			</motion.div>
		</section>
	)
}
