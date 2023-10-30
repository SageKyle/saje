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
					<span onClick={() => setShowModal(false)}>x</span>
				</small>
			)}
		</>
	)
}
