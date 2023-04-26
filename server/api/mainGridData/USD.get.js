export default defineEventHandler(async (event) => {
  const response = await $fetch(`https://api.exchangerate-api.com/v4/latest/USD`)

  return response
  // return response.rates.KRW
})