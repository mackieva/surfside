import { addItem } from '@/app/lib/actions';

export default function AddForm() {
	return (
		<form className='flex flex-col' action={addItem}>
			<div className='mb-3'>
				<label htmlFor='item-name' className='mb-2 block text-sm font-medium'>
					Name
				</label>
				<input
					type='text'
					id='item-name'
					className='peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2'
				/>
			</div>
			<div className='mb-3'>
				<label htmlFor='item-price' className='mb-2 block text-sm font-medium'>
					Price
				</label>
				<input
					type='number'
					name='item-price'
					id='item-price'
					className='peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2'
				/>
			</div>
			<div className='mb-3'>
				<label htmlFor='item-link' className='mb-2 block text-sm font-medium'>
					Link
				</label>
				<input
					type='text'
					id='item-link'
					className='peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2'
				/>
			</div>
			<button
				type='submit'
				className='text-center text-lg px-5 py-4 uppercase bg-ssblue border-r-2 border-solid border-blueLight rounded-md text-white hover:bg-blueLight transition-all'
			>
				Add
			</button>
		</form>
	);
}
