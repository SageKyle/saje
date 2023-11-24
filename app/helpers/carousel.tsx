'use client'

import style from '@/app/assets/styles/work.module.css'
import { projectImage } from '@/app/lib/projectImgObj'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import Image from 'next/image'

type carouselProps = {
	imgObj: projectImage[]
	label: string
}

export default function Carousel({ imgObj, label }: carouselProps) {
	return (
		<div className={style.sliderContainer}>
			<Splide
				options={{
					rewind: true,
					autoplay: true,
					perPage: 1,
					pauseOnFocus: true,
					speed: 500,
				}}
				aria-label={label}
			>
				{imgObj.map((img, index) => (
					<SplideSlide key={index} className={style.sliderImgWrapper}>
						<Image
							src={img.src}
							alt={img.alt}
							fill
							data-splide-lazy={img.src}
						/>
					</SplideSlide>
				))}
				<button className="splide__toggle" type="button">
					<svg
						className="splide__toggle__play"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="m22 12-20 11v-22l10 5.5z" />
					</svg>
					<svg
						className="splide__toggle__pause"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="m2 1v22h7v-22zm13 0v22h7v-22z" />
					</svg>
				</button>
			</Splide>
		</div>
	)
}
