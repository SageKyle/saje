'use client'

import utils from '@/app/assets/styles/utils.module.css'

type scrollerPropType = {
	scrollItems: string[]
	direction: 'forward' | 'backward'
	extraProps?: string[]
}

export default function Scroller(props: scrollerPropType) {
	return (
		<article {...props.extraProps} className={utils.scrollWrapper}>
			<div className={utils.scrollContainer} data-direction={props.direction}>
				{props.scrollItems.map((item) => (
					<span key={item} className={utils.scrollItem}>
						{item}
					</span>
				))}
			</div>
			<div className={utils.scrollContainer} data-direction={props.direction}>
				{props.scrollItems.map((item) => (
					<span key={item} className={utils.scrollItem}>
						{item}
					</span>
				))}
			</div>
		</article>
	)
}
