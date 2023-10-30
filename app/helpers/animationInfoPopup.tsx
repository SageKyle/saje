import { useState } from 'react'

export default function AnimationInfoPopup() {
	const [showModal, setShowModal] = useState(true)

	return (
		<>
			{showModal && (
				<small
					role="popup"
					aria-label="enable/disable animations"
					id="animation-info"
				>
					Don&apos;t like animations? Click here to toggle all animations on/off
					<span onClick={() => setShowModal(false)}>
						<svg
							className=""
							data-testid="geist-icon"
							fill="none"
							height="24"
							shape-rendering="geometricPrecision"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1.5"
							viewBox="0 0 24 24"
							width="24"
						>
							<circle cx="12" cy="12" r="10" fill="var(--geist-fill)"></circle>
							<path d="M15 9l-6 6" stroke="var(--geist-stroke)"></path>
							<path d="M9 9l6 6" stroke="var(--geist-stroke)"></path>
						</svg>
					</span>
				</small>
			)}
		</>
	)
}
