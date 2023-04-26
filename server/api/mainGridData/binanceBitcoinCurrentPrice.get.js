export default defineEventHandler(async (event) => {
  const response = await $fetch(`https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT`)

  return response
})