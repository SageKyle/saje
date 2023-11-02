import Image from 'next/image'
import Illustration from '../../assets/images/journey.svg'
import Styles from '../../assets/styles/experience.module.css'

export default function MyExperience() {
	return (
		<section
			id="my-experience"
			aria-label="a brief summary of my professional experience"
			className={Styles.container}
		>
			<article className="">
				<h3 className={Styles.sectionHeading}>My Journey</h3>
				<section className={Styles.sectionTxt}>
					<p>
						Over the years, I&apos;ve worked with several individuals and teams
						across different locations and timezones. I&apos;ve had the
						opportunity to build and collaborate on amazing products with other
						software engineers and designers.
					</p>

					<p>
						I currently work as an associate Frontend Developer at Briskit
						Agency, building performant and accessible web applications based on
						provided requirements
					</p>
					<p>
						Along with this, I have also been working with ECO Afrca as a
						volunteer Frontend Engineer, collaborating with other developers to
						build the ECO platform. This brought a couple of opportunities, like
						a 3-month contract to build a web platform including a dashboard,
						profile and merch store for a religious organization.
					</p>
					<p>
						In between these experiences and during my leisure time, I&apos;ve
						also contributed to a few open source projects, and also
						collaborated with other solo engineers to build some really
						interesting softwares.
					</p>
				</section>
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
		</section>
	)
}
