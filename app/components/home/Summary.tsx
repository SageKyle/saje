import PrimaryBtn from '@/app/utils/PrimaryBtn'
import Styles from '../../assets/styles/summarySection.module.css'

export default function Summary() {
	return (
		<section
			id="summary"
			className={Styles.container}
			aria-label="a roundup of what I do including their links"
		>
			<article className={Styles.section}>
				<h5 className={Styles.sectionHeading}>I build stuff</h5>
				<p className={Styles.sectionTxt}>
					<em>I&apos;m passionate about tech!</em> You&apos;ve probably heard
					this, way too may times; but I&apos;m not just passionate about tech
					itself, I am very curious about what tech can do— how much can we
					achieve using tech? And this was what intrigued and brought me to ECO.
					<br />
					My approach to learning is to actively build projects. I love to build
					stuff, to go behind the scene and understand how the tool works...
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
					<em>It&apos;s always a win-win-win! (~_^)</em>
				</p>
				<PrimaryBtn text="my blog" href="https://saje.hashnode.dev" />
			</article>
		</section>
	)
}
