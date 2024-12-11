import type { Metadata } from 'next';
import './globals.css';
import Header from './ui/Header';

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
			<body className='bg-slate-100'>
				<Header />
				{children}
			</body>
		</html>
	);
}
