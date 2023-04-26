export default defineEventHandler(async (event) => {
  const response = await $fetch(`https://api.upbit.com/v1/market/all`)

  console.log('response:', response)

  return response
})