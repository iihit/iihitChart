<style lang="scss" scoped>
.bitmexChatting {
  height: inherit;
  overflow: scroll;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.trollboxForm {
  background: white;
  h2 {
    padding: 1rem 1rem 0.5rem 1rem;
    font-size: 1.2rem;
  }
  // .trollboxForm__wrapper__container {
  // }
  .trollboxForm__wrapper__chat {
      margin-top: 0.2rem;
      padding: 0.7rem 0.5rem;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      word-break: break-all;
      transition: all 5s ease-in-out;
      span:nth-child(1) {
        margin-right: 0.3rem;
        font-size: 0.8rem;
        font-weight: 300;
        color: #aaa;
      }
      span:nth-child(2) {
        margin-right: 0.3rem;
        font-size: 0.9rem;
        font-weight: 400;
        color: #7a7a7a;
      }
      span:nth-child(3) {
        font-size: 1rem;
        font-weight: 700;
        color: #2c3e50;
        code {
          font-size: 0.7rem;
        }
      }

      @media (max-width: 575px) {
        span:nth-child(1) {
          font-size: 0.75rem;
        }

        span:nth-child(2) {
          font-size: 0.8rem;
        }
      }
    }
}
</style>

<template>
  <div class="bitmexChatting">
    <div class="trollboxForm">
      <div class="trollboxForm__wrapper__container" ref="currentChat">
        <div v-for="(row, index) in formattedChat" :key="index">
          <div class="trollboxForm__wrapper__chat">
            <span>{{ standardtimeTohhmm(row.date) }}</span>
            <span>{{ row.user }}:</span>
            <span v-html="row.html"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
/**
 * 변수
 */
const props = defineProps({
  chat: {
    type: Object,
    required: true
  },
})

const formattedChat = computed(() => {
  return props.chat.map(x => {
    return {
      user: x.user,
      html: (x.html).replace('<img class=\"emoji\" src=\"/img/emoji/bitmex.png?v=1\" />', ''),
      date: x.date,
      // color: getRandomColor(),
    }
  })
})

const socket = ref(null)

/**
 * 라이브러리
 */
const { standardtimeTohhmm } = useConvertDate()

/**
 * 함수
 */
const connectingSocket = () => {
  if (socket.value) {
    socket.value.close();
  }

  socket.value = new WebSocket('wss://ws.bitmex.com/realtimePlatform?subscribe=chat')
  socket.value.onopen = async function (event) {
    console.log('socketTrollbox SOCKET START...', event)
  }

  socket.value.onmessage = (event) => {
    // 먼저 채팅 데이터인지 확인합니다.
    const isChatMessage = (JSON.parse(event.data).action === 'insert')
    if (isChatMessage) {
      const {
        channelID,
        user,
        html,
        date
      } = JSON.parse(event.data).data[0]

      // 한국 채팅 데이터만 가져옵니다.
      const isKoreanChatMessage = (channelID === 4)
      if (isKoreanChatMessage) {
        props.chat.unshift({
          user: user,
          html: (html).replace('<img class=\"emoji\" src=\"/assets/img/emoji/bitmex.png?v=1\" />', ''),
          date: date,
          // color: getRandomColor(),
        })
      }
    }
    if (props.chat.length > 100) {
      props.chat.pop()
    }
  }

  socket.value.onclose = function () {
    // connection closed, discard old websocket and create a new one in 3s
    setTimeout(function() {
      connectingSocket();
    }, 2000);
  }
}

/**
 * 훅
 */
onBeforeMount(() => {
  connectingSocket()
})

onMounted(() => {
  const element = document.querySelector('.bitmexChatting');
  element.scrollTop = element.scrollHeight;
})
</script>