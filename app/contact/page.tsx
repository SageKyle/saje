'use client'

import { sendEmail } from '@/app/api/send/route'
import contact from '@/app/assets/styles/contact.module.css'
import Utils from '@/app/assets/styles/utils.module.css'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FormEvent, useRef, useState } from 'react'

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

import styles from '@/app/page.module.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Contact() {
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
		await sendEmail(formData)
	}

	return (
		<>
			<Navbar />
			<main className={styles.main}>
				<section
					id="cta"
					aria-label="call to action"
					className={contact.wrapper}
				>
					<motion.div
						style={{ scale: scaleX }}
						transition={{ opacity: scaleX }}
						aria-describedby="cta-desc"
						className={contact.container}
						ref={ref}
					>
						<h4 id="cta-heading" className={contact.title}>
							Get in touch
						</h4>
						<p id="cta-desc" className={contact.desc}>
							Got a question or proposal, or just want to say hello? Go ahead.
							My inbox is always open!
						</p>
						<form className={contact.form} onSubmit={handleSubmit}>
							<fieldset>
								<label>
									<span>your name</span>
									<input
										className={contact.input}
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
										className={contact.input}
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
										className={contact.input}
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
								className={`${Utils.secondaryBtn} ${Utils.animateBtn} ${contact.formBtn}`}
							>
								send
							</button>
						</form>
					</motion.div>
				</section>
			</main>
			<Footer />
		</>
	)
}
