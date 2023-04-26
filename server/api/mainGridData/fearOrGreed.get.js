export default defineEventHandler(async (event) => {
  const response = await $fetch(`https://api.alternative.me/fng`)

  return response
})
