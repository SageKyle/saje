import Utils from '@/app/assets/styles/utils.module.css'
import Link from 'next/link'

interface iProps {
	href: string
	text: string
}

export default function PrimaryBtn(props: iProps): JSX.Element {
	return (
		<Link
			href={props.href}
			className={`${Utils.secondaryBtn} ${Utils.animateBtn}`}
		>
			{props.text}{' '}
			<svg
				width="32"
				height="22"
				viewBox="0 0 72 22"
				xmlns="http://www.w3.org/2000/svg"
				className={`${Utils.icon}`}
			>
				<path
					fill="none"
					stroke="#d6dbdc"
					strokeWidth="2"
					strokeMiterlimit="0"
					d="M.043 11.119h70.714M60.917 1.319l9.8 9.8-9.8 9.8"
				></path>
			</svg>
		</Link>
	)
}
