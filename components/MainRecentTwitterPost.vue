<style lang="scss" scoped>

</style>

<template>
  <section>
    
  </section>
</template>

<script setup>
// 1. Twitter 개발자 포털에서 API 키를 생성한 후, 필요한 정보를 아래 변수에 저장합니다.
const config = {
  consumer_key: 'YOUR_CONSUMER_KEY',
  consumer_secret: 'YOUR_CONSUMER_SECRET',
  access_token: 'YOUR_ACCESS_TOKEN',
  access_token_secret: 'YOUR_ACCESS_TOKEN_SECRET'
}

// 2. 필요한 라이브러리를 설치하고, 코드 상단에서 import 합니다.
const Twit = require('twit')

// 3. API를 요청하고 최근 3개의 트윗을 가져옵니다.
const T = new Twit(config)

T.get('statuses/user_timeline', { count: 3, screen_name: 'YOUR_TWITTER_HANDLE' }, function(err, data, response) {
  if (!err) {
    const tweets = data
    console.log(tweets)
    // 트윗을 웹 페이지에 적용합니다.
    const tweetContainer = document.querySelector('#tweets')
    tweets.forEach((tweet) => {
      const tweetEl = document.createElement('div')
      tweetEl.innerHTML = `<p>${tweet.text}</p>`
      tweetContainer.appendChild(tweetEl)
    })
  } else {
    console.error(err)
  }
})

</script>