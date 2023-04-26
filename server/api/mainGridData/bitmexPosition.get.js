import crypto from 'crypto'
// import request from 'request'

const apiKey = 'qWD-erRob2xnC5hRz5yf9Ghs';
const apiSecret = 'RGS5Q4reVZ9fTYs0mJ7HOOnnx2CByh4sq9i0CX13gjNteR3W';

export default defineEventHandler(async (event) => {
  const verb = 'GET'
  const path = '/api/v1/position'
  const expires = Math.round(new Date().getTime() / 1000) + 60 // 1 min in the future
  const data = {
    filter: { 'symbol': 'XBTUSD' },
  }

  // Pre-compute the postBody so we can be sure that we're using *exactly* the same body in the request
  // and in the signature. If you don't do this, you might get differently-sorted keys and blow the signature.
  const postBody = JSON.stringify(data)

  const signature = crypto.createHmac('sha256', apiSecret)
    .update(verb + path + expires + postBody)
    .digest('hex')

  const headers = {
    'content-type' : 'application/json',
    'Accept': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'api-expires': expires,
    'api-key': apiKey,
    'api-signature': signature,
  }

  const requestOptions = {
    headers: headers,
    // Notice we are using testnet here. Switch to www to query the production site.
    // url: 'https://www.bitmex.com' + path,
    method: verb,
    params: postBody,
  }

  const response = await $fetch('https://www.bitmex.com' + path, requestOptions)
  console.log('response:', response)

  return response
})

// export default defineEventHandler(async (event) => {
//   const verb = 'GET'
//   const path = '/api/v1/position'
//   const expires = Math.round(new Date().getTime() / 1000) + 60 // 1 min in the future
//   const data = {
//     filter: { 'symbol': 'XBTUSD' },
//   }

//   // Pre-compute the postBody so we can be sure that we're using *exactly* the same body in the request
//   // and in the signature. If you don't do this, you might get differently-sorted keys and blow the signature.
//   const postBody = JSON.stringify(data)

//   const signature = crypto.createHmac('sha256', apiSecret)
//     .update(verb + path + expires + postBody)
//     .digest('hex')

//   const headers = {
//     'content-type' : 'application/json',
//     'Accept': 'application/json',
//     'X-Requested-With': 'XMLHttpRequest',
//     // This example uses the 'expires' scheme. You can also use the 'nonce' scheme. See
//     // https://www.bitmex.com/app/apiKeysUsage for more details.
//     'api-expires': expires,
//     'api-key': apiKey,
//     'api-signature': signature,
//   }

//   const requestOptions = {
//     headers: headers,
//     // Notice we are using testnet here. Switch to www to query the production site.
//     url: 'https://www.bitmex.com' + path,
//     method: verb,
//     body: postBody,
//   }

//   request(requestOptions, function (error, response, body) {
//     if (error) {
//       console.log(error)
//     }

//     console.log('body:', body)

//     return {
//       body,
//     }
//   })
// })
