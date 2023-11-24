export type EmailTemplateProps = {
	name: string
	email: string
	message: string
}

export function EmailTemplate(props: EmailTemplateProps) {
	return (
		<section>
			<h1>New form submission from {props.name}</h1>
			<p>
				Hey Saje, you have a new message on your portfolio site from{' '}
				{props.name}
			</p>
			<small>Message: {props.message}</small>
			<p>Email address: {props.email}</p>
		</section>
	)
}
