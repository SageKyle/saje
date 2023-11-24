// import { FaCss3, FaHtml5, FaJs, FaReact } from 'react-icons/fa6'
import Scroller from '@/app/helpers/Scroller'
import { skills } from '@/app/lib/SkillsObj'

export default function MyTools() {
	return (
		<section
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
