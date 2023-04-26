export default defineEventHandler(async (event) => {
  const response = await $fetch(`https://api.upbit.com/v1/ticker?markets=KRW-BTC`)

  return response
})