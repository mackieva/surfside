import Link from 'next/link';
import Table from './ui/dashboard/table';

export default function Home() {
	return (
		<main className='max-w-screen-lg mx-auto flex flex-col flex-between gap-3'>
			<Link
				href='/add'
				className='text-center px-5 py-4 uppercase bg-ssblue border-r-2 border-solid border-blueLight rounded-md text-white hover:bg-blueLight transition-all'
			>
				Add Item
			</Link>
			<Table />
		</main>
	);
}
