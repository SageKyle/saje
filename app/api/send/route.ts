import {
	EmailTemplate,
	EmailTemplateProps,
} from '@/app/components/email-template'
import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest): Promise<NextResponse> {
	const formData: EmailTemplateProps = await request.json()
	try {
		const data = await resend.emails.send({
			from: 'Saje <onboarding@resend.dev>',
			to: 'ominyi.webdev@gmail.com',
			subject: `New form submission on your portfolio from ${formData.name}`,
			reply_to: formData.email,
			react: EmailTemplate(formData),
		})

		return NextResponse.json(data)
	} catch (error) {
		return NextResponse.json({ error })
	}
}
