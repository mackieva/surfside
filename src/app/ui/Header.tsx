import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
	return (
		<header className='w-full px-8 py-6'>
			<Link href='/'>
				<Image
					src='/surfsidebeach.png'
					className='max-w-[175px] mx-auto'
					alt='surfside beach logo'
					width={839}
					height={840}
				/>
			</Link>
			<h1 className='hidden'>Surfside Beach 2025</h1>
		</header>
	);
}
