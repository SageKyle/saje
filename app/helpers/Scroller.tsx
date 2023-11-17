import utils from '@/app/assets/styles/utils.module.css'

type scrollerPropType = {
	scrollItems: string[]
	direction: 'forward' | 'backward'
	extraProps?: string[]
}

export default function Scroller(props: scrollerPropType) {
	return (
		<article {...props.extraProps} className={utils.scrollWrapper}>
			<ul className={utils.scrollContainer} data-direction={props.direction}>
				{props.scrollItems.map((item) => (
					<li key={item} className={utils.scrollItem}>
						{item}
					</li>
				))}
				{props.scrollItems.map((item) => (
					<li key={item} className={utils.scrollItem} aria-hidden="true">
						{item}
					</li>
				))}
			</ul>
		</article>
	)
}
