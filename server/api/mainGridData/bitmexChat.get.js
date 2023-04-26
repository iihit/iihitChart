export default defineEventHandler(async (event) => {
  const response = await $fetch(`https://www.bitmex.com/api/v1/chat?count=90&reverse=true&channelID=4`)

  return response
})