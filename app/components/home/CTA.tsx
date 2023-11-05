'use client'

import Styles from '@/app/assets/styles/cta.module.css'
import Utils from '@/app/assets/styles/utils.module.css'
import { FormEvent, useState } from 'react'
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

	function handleChange(name: string, value: string): void {
		setFormData((prev) => ({ ...prev, [name]: value }))
	}

	function handleSubmit(e: FormEvent): void {
		e.preventDefault()
		console.log(formData)
	}

	function clearForm(): void {
		setFormData(initialState)
	}

	return (
		<section id="cta" aria-label="call to action" className={Styles.wrapper}>
			<section aria-describedby="cta-desc" className={Styles.container}>
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
								maxLength={80}
							></textarea>
						</label>
					</fieldset>
					<button
						type="submit"
						className={`${Utils.secondaryBtn} ${Utils.animateBtn} ${Styles.formBtn}`}
					>
						send
					</button>
				</form>
			</section>
		</section>
	)
}
