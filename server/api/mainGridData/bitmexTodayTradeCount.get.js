export default defineEventHandler(async (event) => {
  const response = await $fetch(`https://www.bitmex.com/api/v1/trade`)

  return response
})