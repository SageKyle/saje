import Scroller from '@/app/helpers/Scroller'
import { skills } from '@/app/lib/SkillsObj'

export default function MyTools() {
	return (
		<section
			style={{ marginBlock: '8rem' }}
			id="my-tools"
			className=""
			aria-label="a list of technologies and tools I've worked with"
		>
			<article>
				<Scroller scrollItems={skills} direction="forward" />
				<Scroller scrollItems={skills} direction="backward" />
			</article>
		</section>
	)
}
