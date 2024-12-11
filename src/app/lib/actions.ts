'use server';

export async function addItem(formData: FormData) {
	const item = formData.get('item-name');
	const price = formData.get('item-cost');
	const link = formData.get('item-link');

	console.log(`
        Item: ${item}
        Price: ${price}
        Link: ${link}
        `);
}
