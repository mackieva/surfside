'use server';

import { redirect } from 'next/navigation';

export async function addItem(formData: FormData) {
	const item = formData.get('item-name');
	const cost = formData.get('item-cost');
	const link = formData.get('item-link');

	console.log(`
        Item: ${item}
        Cost: ${cost}
        Link: ${link}
        `);

	redirect('/');
}
