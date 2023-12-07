import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	metadataBase: new URL('https://saje.vercel.app'),
	title: {
		template: 'Paul Saje | %s',
		default: 'Paul Saje',
	},
	alternates: {
		canonical: '/',
		languages: {
			'en-US': '/en-US',
			'de-DE': '/de-DE',
		},
	},
	description:
		'A professional Frontend developer with proficiency in JavaScript, React, NextJS and TypeScript',
	keywords: [
		'frontend developer',
		'React developer',
		'React',
		'NextJS',
		'TypeScript',
		'web developer',
		'Paul Saje',
		'Paul Ominyi',
		'JavaScript',
		'JavaScript developer',
	],
	twitter: {
		card: 'summary_large_image',
		title: 'Paul Saje',
		creator: '@Ominyi_Saje',
		images: ['./saje.png'],
		description:
			'Paul Saje: a professional Frontend developer with proficiency in JavaScript, React, NextJS and TypeScript',
	},
	openGraph: {
		type: 'website',
		url: 'https://saje.vercel.app',
		description:
			'A professional Frontend developer with proficiency in JavaScript, React, NextJS and TypeScript',
		title: 'Paul Saje | my portfolio',
		siteName: 'Paul Saje',
		images: [
			{
				url: './og_image.png',
				width: 1400,
				height: 1024,
				alt: 'a screenshot of the homepage of my portfolio',
			},
		],
	},
	robots: {
		index: false,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: false,
			noimageindex: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={inter.className} data-animate="true">
				{children}
			</body>
		</html>
	)
}
