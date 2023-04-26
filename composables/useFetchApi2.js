export default async (endpoint) => {
  try {
    const { data, pending, error, refresh } = await useFetch(endpoint, {
      pick: ['title']
    })

    console.log('pending:', pending)
    console.log('data:', data)

    return data
  } catch (error) {
    console.error(error)
  }
}