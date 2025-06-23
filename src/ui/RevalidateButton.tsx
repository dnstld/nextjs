'use client';

import { revalidateOtherRandom } from '@/app/actions/revalidate';

export function RevalidateButton() {
  return (
    <form action={revalidateOtherRandom}>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Revalidate Tag
      </button>
    </form>
  );
}
