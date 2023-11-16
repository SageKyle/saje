import Scroller from '@/app/helpers/Scroller'
import { Skills } from '@/app/lib/SkillsObj'

export default function Tools() {
	return (
		<div>
			<Scroller scrollItems={Skills} direction="forward" />
			<Scroller
				scrollItems={Skills}
				direction="backward"
				extraProps={['aria-hidden="true"']}
			/>
		</div>
	)
}
