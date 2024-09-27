import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'
import { Toaster } from 'sonner'

import { SITE_NAME } from '@/constants/seo.constants'

import './globals.scss'

const zen = Ubuntu({
	subsets: ['cyrillic', 'latin'],
	weight: ['300', '400', '500', '700'],
	display: 'swap',
	variable: '--font-zen',
	style: ['normal']
})

export const metadata: Metadata = {
	title: {
		default: SITE_NAME,
		template: `%s | ${SITE_NAME}`
	},
	description: 'Таск-менеджер Кабан для хакатона ЗаводИТ'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru-RU'>
			<body className={zen.className}>
				<Toaster
					theme='dark'
					position='top-right'
					duration={1500}
				/>
				{children}
			</body>
		</html>
	)
}
