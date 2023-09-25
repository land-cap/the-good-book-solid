import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'

const font = DM_Sans({ subsets: ['latin-ext'] })

export const metadata: Metadata = {
	title: 'The Good Book',
	description:
		'A Bible-reading app that works on any platform without compromising the experience.',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={font.className}>{children}</body>
		</html>
	)
}
