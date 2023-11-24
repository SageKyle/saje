// import { FaCss3, FaHtml5, FaJs, FaReact } from 'react-icons/fa6'
import Scroller from '@/app/helpers/Scroller'
import { Skills } from '@/app/lib/SkillsObj'

export default function MyTools() {
	return (
		<section
			id="my-tools"
			className=""
			aria-label="a list of technologies and tools I've worked with"
		>
			<article>
				<Scroller scrollItems={Skills} direction="forward" />
				<Scroller scrollItems={Skills} direction="backward" />
			</article>
		</section>
	)
}
