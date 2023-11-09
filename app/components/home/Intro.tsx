'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Styles from '../../assets/styles/intro.module.css'

export default function Intro() {
	const ref = useRef<HTMLDivElement>(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['0 1', '1.33 1'],
	})
	const scaleX = useTransform(scrollYProgress, [0, 1], [0.8, 1])

	return (
		<section
			id="introduction"
			aria-label="introduction to what I do"
			className={Styles.wrapper}
		>
			<motion.div
				style={{ scale: scaleX }}
				className={Styles.container}
				aria-description="a quick summary of the two major aspects of my career"
				ref={ref}
			>
				<article className={Styles.section}>
					<h2 className={Styles.sectionHeading}>Engineering</h2>
					<p className={Styles.sectionTxt}>
						In building JavaScript applications, I&apos;m equipped with just the
						right tools, and can absolutely function independently of them to
						deliver fast, resilient solutions optimized for scale — performance
						and scalabilty are priorities on my radar.
					</p>
				</article>
				<article className={Styles.section}>
					<h2 className={Styles.sectionHeading}>Writing</h2>
					<p className={Styles.sectionTxt}>
						In building JavaScript applications, I&apos;m equipped with just the
						right tools, and can absolutely function independently of them to
						deliver fast, resilient solutions optimized for scale — performance
						and scalabilty are priorities on my radar.
					</p>
				</article>
			</motion.div>
		</section>
	)
}
