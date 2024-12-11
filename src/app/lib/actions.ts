'use server';

import { neon } from '@neondatabase/serverless';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const sql = neon(process.env.DATABASE_URL);

export async function addItem(formData: FormData) {
	const item = formData.get('item-name');
	const cost = formData.get('item-cost');
	const link = formData.get('item-link');

	await sql`INSERT INTO item (item, link, cost) VALUES (${item}, ${link}, ${cost})`;

	revalidatePath('/');
	redirect('/dashboard/invoices');
}
