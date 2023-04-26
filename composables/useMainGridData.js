export default () => {
  /**
   * @returns {object} 채팅 데이터를 가져옵니다.
   */
  const getBitmexChatting = async () => {
    const response = await useFetchApi(`/api/mainGridData/bitmexChat`, {
      method: 'GET'
    })

    return response.data
  }

  const getUpbitBitcoinPrice = async () => {
    const response = await useFetchApi(`/api/mainGridData/upbitBitcoinCurrentPrice`, {
      method: 'GET'
    })

    return Math.round(response.data[0].trade_price)
  }

  const getBinanceBitcoinPrice = async () => {
    const response = await useFetchApi(`/api/mainGridData/binanceBitcoinCurrentPrice`, {
      method: 'GET'
    })

    return Math.round(response.data.price)
  }

  const getUSDPrice = async () => {
    const response = await useFetchApi(`/api/mainGridData/USD`, {
      method: 'GET'
    })

    return response.data.rates.KRW
  }

  const getFearOrGreed = async () => {
    const response = await useFetchApi(`/api/mainGridData/fearOrGreed`, {
      method: 'GET'
    })

    return parseInt(response.data.data[0].value)
  }

  const getTrendingCoin = async () => {
    const response = await useFetchApi(`/api/mainGridData/coingeckoTredingCoin`, {
      method: 'GET'
    })

    return response.data.coins[0].item
  }

  const getBitmexAPIInfo = async () => {
    const response = await useFetchApi(`/api/auth/bitmex`, {
      method: 'POST'
    })

    return response
  }

  const getBitmexPostion = async () => {
    const response = await useFetchApi(`/api/mainGridData/bitmexPosition`, {
      method: 'GET'
    })

    return response
  }

  const getUpbitMarketCoinList = async () => {
    const response = await useFetchApi(`/api/mainGridData/upbitMarketCoinList`, {
      method: 'GET'
    })

    const filteringCoinList = response.data.filter(item => item.market.startsWith('KRW-'))

    return filteringCoinList
  }

  const getUpbitMarketLastprice = async () => {
    const { data, pending } = await useFetch('https://api.upbit.com/v1/candles/days?market=KRW-BTC&count=200&convertingPriceUnit=KRW')
    return {
      data, pending
    }
  }

  return {
    getBitmexChatting,
    getUpbitBitcoinPrice,
    getBinanceBitcoinPrice,
    getUSDPrice,
    getFearOrGreed,
    getTrendingCoin,
    getBitmexAPIInfo,
    getBitmexPostion,
    getUpbitMarketCoinList,
    getUpbitMarketLastprice,
  }
}