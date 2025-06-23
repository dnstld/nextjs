'use server';

import { revalidateTag } from 'next/cache';

export async function revalidateOtherRandom() {
  console.log('Revalidating tag: other-random');
  await revalidateTag('other-random');
}