export default defineEventHandler(async (event) => {
  const response = await $fetch(`https://api.coingecko.com/api/v3/search/trending`)

  return response
})
