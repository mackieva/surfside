import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'Surfside Beach Gets',
	description: 'Checklist for the beach trip 2025',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	);
}
