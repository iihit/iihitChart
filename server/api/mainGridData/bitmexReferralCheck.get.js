export default defineEventHandler(async (event) => {
  const response = await $fetch(`https://www.bitmex.com/api/v1/user/affiliateStatus`, {
    method: 'get',
    body: {
      
    },
  })

  return response
})

// const axios = require('axios');
// const BitMEXApi = require('bitmex-api');

// const apiKey = 'YOUR_BITMEX_API_KEY';
// const apiSecret = 'YOUR_BITMEX_API_SECRET';

// const bitmexClient = new BitMEXApi.BitmexAPI({
//   apiKeyID: apiKey,
//   apiKeySecret: apiSecret,
//   testnet: false, // Change to true if you want to use the testnet
// });

// async function isUserConnectedToReferral(referralAccountId) {
//   try {
//     const response = await bitmexClient.User.getUserAffiliateStatus();
//     const userAffiliateStatus = response.result;

//     if (userAffiliateStatus.referrerAccount === parseInt(referralAccountId)) {
//       return true;
//     }
//     return false;
//   } catch (error) {
//     console.error('Error fetching affiliate status:', error.message);
//     return false;
//   }
// }

// // Usage example
// const referralAccountId = '560941';
// isUserConnectedToReferral(referralAccountId).then((isConnected) => {
//   if (isConnected) {
//     console.log('The user is connected to the referral account.');
//   } else {
//     console.log('The user is not connected to the referral account.');
//   }
// });
