'use client'

import PrimaryBtn from '@/app/utils/PrimaryBtn'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import Illustration from '../../assets/images/journey.svg'
import Styles from '../../assets/styles/experience.module.css'

export default function MyExperience() {
	const ref = useRef<HTMLDivElement>(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['0 1', '1.33 1'],
	})
	const scaleX = useTransform(scrollYProgress, [0, 1], [0.8, 1])

	return (
		<section id="my-experience" className={Styles.wrapper}>
			<motion.div
				ref={ref}
				style={{ scale: scaleX, opacity: scaleX }}
				className={Styles.container}
				aria-description="a brief summary of my professional experience"
			>
				<article className={Styles.txtWrapper}>
					<h3 className={Styles.sectionHeading}>My Journey</h3>
					<section className={Styles.sectionTxt}>
						<p>
							Over the years, I&apos;ve worked with several individuals and
							teams across different locations and timezones. I&apos;ve had the
							opportunity to build and collaborate on amazing products with
							other software engineers and designers.
						</p>

						<p>
							I currently work as a Frontend Developer (contract) at ECO Afrca,
							collaborating with other developers to build the ECO platform,
							along with other amazing projects such as a web platform which
							includes a dashboard, profile and merch store for a religious
							organization.
						</p>
						<p>
							I also worked with Briskit Agency as a part-time Frontend
							Engineer, building performant and accessible web applications
							based on provided requirements.
						</p>
						<p>
							In between these experiences and during my leisure time, I&apos;ve
							also contributed to a few open source projects, and also
							collaborated with other solo engineers to build some really
							interesting softwares.
						</p>
					</section>
					<PrimaryBtn text="about me" href="/about" />
				</article>
				<div
					className={Styles.imgWrapper}
					aria-label="an illustrative image and text to showcase my journey into software engineering"
				>
					<Image
						src={Illustration}
						loading="lazy"
						alt="My software journey"
						fill
					/>
					<small className={Styles.eco} role="complementary">
						ECO
						<br /> Africa
					</small>
					<small className={Styles.briskit} role="complementary">
						Briskit Agency
					</small>
					<small className={Styles.openSource} role="complementary">
						Open Source
					</small>
				</div>
			</motion.div>
		</section>
	)
}
