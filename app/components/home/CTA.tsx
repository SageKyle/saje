'use client'

import Styles from '@/app/assets/styles/cta.module.css'
import Utils from '@/app/assets/styles/utils.module.css'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FormEvent, useRef, useState } from 'react'
import { MdRefresh } from 'react-icons/md'

type FormType = {
	name: string
	email: string
	message: string
}

const initialState = {
	name: '',
	email: '',
	message: '',
}

export default function CTA() {
	const [formData, setFormData] = useState<FormType>(initialState)
	const ref = useRef<HTMLDivElement>(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['0 1', '1.33 1'],
	})
	const scaleX = useTransform(scrollYProgress, [0, 1], [0.8, 1])

	function handleChange(name: string, value: string): void {
		setFormData((prev) => ({ ...prev, [name]: value }))
	}

	async function handleSubmit(e: FormEvent) {
		e.preventDefault()
		console.log(formData)
	}

	function clearForm(): void {
		setFormData(initialState)
	}

	return (
		<section id="cta" aria-label="call to action" className={Styles.wrapper}>
			<motion.div
				style={{ scale: scaleX }}
				transition={{ opacity: scaleX }}
				aria-describedby="cta-desc"
				className={Styles.container}
				ref={ref}
			>
				<MdRefresh
					title="Reset Form"
					className={Styles.refreshIcon}
					onClick={clearForm}
				/>

				<h4 id="cta-heading" className={Styles.title}>
					Get in touch
				</h4>
				<p id="cta-desc" className={Styles.desc}>
					Got a question or proposal, or just want to say hello? Go ahead.
				</p>
				<form className={Styles.form} onSubmit={handleSubmit}>
					<fieldset>
						<label>
							<span>your name</span>
							<input
								className={Styles.input}
								type="text"
								name="name"
								value={formData.name}
								onChange={(e) => handleChange('name', e.target.value)}
								placeholder="John Doe"
								autoComplete="on"
								title="Enter your name"
								required
								minLength={3}
								maxLength={80}
							/>
						</label>
						<label>
							<span>email address</span>
							<input
								className={Styles.input}
								type="email"
								name="email"
								value={formData.email}
								onChange={(e) => handleChange('email', e.target.value)}
								placeholder="example@email.com"
								autoComplete="on"
								title="Enter your email address"
								required
								minLength={5}
								maxLength={80}
							/>
						</label>
						<label>
							<span>your message</span>
							<textarea
								className={Styles.input}
								autoComplete="on"
								title="What do you have in mind?"
								name="message"
								value={formData.message}
								onChange={(e) => handleChange('message', e.target.value)}
								placeholder="Hi Saje, We would love to have you on our team as a Frontend developer as soon as possible"
								required
								minLength={5}
							></textarea>
						</label>
					</fieldset>
					<button
						type="submit"
						disabled={formData === initialState}
						className={`${Utils.secondaryBtn} ${Utils.animateBtn} ${Styles.formBtn}`}
					>
						send
					</button>
				</form>
			</motion.div>
		</section>
	)
}
