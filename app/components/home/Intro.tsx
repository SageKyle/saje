import Styles from '../../assets/styles/intro.module.css'

export default function Intro() {
	return (
		<section
			id="introduction"
			aria-label="introduction to what I do"
			className={Styles.wrapper}
		>
			<div
				className={Styles.container}
				aria-description="a quick summary of the two major aspects of my career"
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
			</div>
		</section>
	)
}
