<style scoped>
.altcoinMAStrategySection {
  padding: 1rem;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
}

.altcoinMAStrategySection__title {
  font-size: 1.4rem;
  font-weight: 700;
}

.table {
  display: flex;
  flex-direction: column;
  max-width: 100%;
}

.table-header {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #ccc;
  font-weight: bold;
}

.table-header div {
  flex: 1;
}

.table-row {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #ccc;
}

.table-row div {
  flex: 1;
}

.price-updated {
  animation-name: rubberBand;
  animation-duration: 1s;
  color: green;
}

@keyframes rubberBand {
  0% {
    transform: scale3d(1, 1, 1);
  }
  30% {
    transform: scale3d(1.25, 0.75, 1);
  }
  40% {
    transform: scale3d(0.75, 1.25, 1);
  }
  50% {
    transform: scale3d(1.15, 0.85, 1);
  }
  65% {
    transform: scale3d(0.95, 1.05, 1);
  }
  75% {
    transform: scale3d(1.05, 0.95, 1);
  }
  100% {
    transform: scale3d(1, 1, 1);
  }
}

</style>

<template>
  <div class="altcoinMAStrategySection">
    <div class="altcoinMAStrategySection__title">
      <div>이동평균선 전략 알트코인 추천</div>
    </div>
    <div class="table">
      <div class="table-row table-header">
        <div class="table-cell">순위</div>
        <div class="table-cell">알트코인 이름</div>
        <div class="table-cell">현재 가격</div>
        <div class="table-cell">전일 대비</div>
        <div class="table-cell">추천지수</div>
      </div>
      <div class="table-row" v-for="(row, index) in coinList" :key="row.english_name">
        <div class="table-cell">{{ index + 1 }}</div>
        <div class="table-cell">{{ row.korean_name }}</div>
        <div class="table-cell" ref="tradePriceRef">{{ setComma(row.trade_price) }}원</div>
        <div class="table-cell">+12%</div>
        <div class="table-cell">9.5</div>
      </div>
    </div>
  </div>
</template>

<script setup>
/**
 * 변수
 */
const props = defineProps({
  coinList: {
    type: Object,
    required: true,
  }
})
const marketSymbolList = computed(() => { return props.coinList.map((item) => { return item.market }) })
const upbit = reactive({
  socket: null,
})
const tradePriceRef = ref(null)
/**
 * 라이브러리
 */
const { setComma } = useCommaNumber()

/**
 * 함수
 */
const connectingSocketUpbit = () => {
  if (upbit.socket) {
    upbit.socket.close();
  }
  upbit.socket = new WebSocket('wss://api.upbit.com/websocket/v1')
  upbit.socket.binaryType = 'arraybuffer';

  upbit.socket.onopen = function (event) {
    console.log('socketUpbit SOCKET START...', event)

    // console.log(`[{ "ticket": "TEST" }, { "type": "ticker", "codes": ${marketSymbolList.value} }]`)

    const sendFormat = [{
      ticket: 'TEST'
    }, {
      type: 'ticker',
      codes: marketSymbolList.value
    }]

    upbit.socket.send(JSON.stringify(sendFormat))

    // upbit.socket.send(`[{ "ticket": "TEST" }, { "type": "ticker", "codes": ${marketSymbolList.value} }]`)
  }

  upbit.socket.onmessage = function (event) {
    let enc = new TextDecoder('utf-8')
    let arr = new Uint8Array(event.data)
    let stringData = enc.decode(arr)
    let data = JSON.parse(stringData)

    props.coinList.forEach(async (row) => {
      if (row.market == data.code ) {
        row.trade_price = data.trade_price
      }

      // console.log('tradePriceRef:', tradePriceRef.value)

      // const el = document.querySelector(`.price[data-market="${market}"]`);
      // el.textContent = price;
      // el.classList.add('price-updated');
      // setTimeout(() => {
      //   el.classList.remove('price-updated');
      // }, 1000);
    })

  }

  upbit.socket.onclose = function () {
    console.log('socket end.')
    setTimeout(function() {
      connectingSocketUpbit();
    }, 2000);
  }
}

/**
 * 훅
 */
onBeforeMount(() => {
  connectingSocketUpbit()
})

// onMounted(() => {
//   connectingSocketUpbit()
// })
</script>
