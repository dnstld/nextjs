
export async function getRandom() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/random`, {
      cache: 'force-cache',
    })

    if (!res.ok) {
      throw new Error(`Failed to fetch random: ${res.status}`)
    }

    const data = await res.json()
    console.log('Random data:', data)
    return data
  } catch (error) {
    console.error('Error fetching random:', error)
    return []
  } 
}
