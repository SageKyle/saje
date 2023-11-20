// 'use server'

import {
	EmailTemplate,
	EmailTemplateProps,
} from '@/app/components/email-template'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend('re_Wmyvx5Tb_6kfCpoQ9EbPSv4o95WDrzp9e')

export async function sendEmail(
	formData: EmailTemplateProps
): Promise<NextResponse> {
	try {
		const data = await resend.emails.send({
			from: 'onboarding@resend.dev',
			to: 'ominyi.webdev@gmail.com',
			subject: 'New form submission on your portfolio',
			reply_to: formData.email,
			react: EmailTemplate(formData),
		})

		return NextResponse.json(data)
	} catch (error) {
		return NextResponse.json({ error })
	}
}
