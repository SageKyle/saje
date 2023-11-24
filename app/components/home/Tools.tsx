'use client'

import Scroller from '@/app/helpers/Scroller'
import { skills } from '@/app/lib/SkillsObj'

export default function Tools() {
	return (
		<div>
			<Scroller scrollItems={skills} direction="forward" />
			<Scroller scrollItems={skills} direction="backward" />
		</div>
	)
}
