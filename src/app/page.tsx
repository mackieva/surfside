import Link from 'next/link';
import Table from './ui/dashboard/table';
import { PlusIcon } from '@heroicons/react/24/outline';

export default function Home() {
	return (
		<main className='max-w-screen-lg mx-auto flex flex-col flex-between justify-center align-center gap-5'>
			<Link
				href='/add'
				className='text-center text-lg px-5 py-4 uppercase bg-ssblue border-r-2 border-solid border-blueLight rounded-md text-white hover:bg-blueLight transition-all flex justify-center align-center gap-1'
			>
				Add Item
				<PlusIcon className='size-6 text-white' />
			</Link>
			<Table />
		</main>
	);
}
