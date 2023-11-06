import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Paul Saje',
	description:
		'A professional Frontend developer with proficiency in JavaScript, React, NextJS and TypeScript',
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
