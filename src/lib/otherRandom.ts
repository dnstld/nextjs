
export async function getOtherRandom() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/other-random`, {
      next: {
        tags: ['other-random'],
      },
    })

    if (!res.ok) {
      throw new Error(`Failed to fetch random: ${res.status}`)
    }

    const data = await res.json()
    return data
  } catch (error) {
    console.error('Error fetching random:', error)
    return []
  } 
}
