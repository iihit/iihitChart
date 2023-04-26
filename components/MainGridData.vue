<style lang="scss" scoped>
.coinInfomation {
  display: grid;
  grid-template-columns: repeat(3, 1.5fr);
  grid-gap: 1rem;
}

.coinInfomation__boxSection {
  display: flex;
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
  padding: 1rem 0.5rem;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  transition: all 0.2s ease-in-out;
  background-color: #fff;
}

// .coinInfomation__boxSection:hover {
//   transform: translateY(-5px);
//   box-shadow: 0 5px 10px rgba(0,0,0,0.2);
// }

.coinInfomation__boxSection__title {
  font-size: 1.2rem;
  font-weight: 300;
  color: #333;
  text-align: center;
  border-bottom: 1px solid #ccc;
  margin-bottom: 0.5rem;
}

.coinInfomation__boxSection__value {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
}

.fas {
  margin-right: 0.2rem;
}

.symbolImage {
  height: 1.4rem; /* 원하는 높이로 조절하세요 */
  width: auto;
  margin-right: 5px; /* 이미지와 심볼 사이의 간격을 조절하려면 이 값을 변경하세요 */
}

.symbolName {

}

.price-up {
  color: #2ecc71;
}

.price-down {
  color: #e74c3c;
}

.fearOrGreedScore {
  margin-right: 0.2rem;
  align-self: baseline;
}
.fearOrGreedName {
  align-self: baseline;
  font-size: 1rem;
}

@media screen and (max-width: 768px) {
  .coinInfomation {
    grid-template-columns: repeat(2, 1fr);
  }
}

</style>

<template>
  <div class="coinInfomation">
    <div class="coinInfomation__boxSection">
      <div>
        <div class="coinInfomation__boxSection__title">비트코인(Binance)</div>
        <div v-if="binance.currentPrice.length > 0" class="coinInfomation__boxSection__value" :class="[binance.isBinancePriceStatus ? 'price-up' : 'price-down']">
          <i class="fas fa-lg" :class="[binance.isBinancePriceStatus ? 'fa-caret-up' : 'fa-caret-down']"></i> 
          {{ setComma(binance.currentPrice[0]) }}
        </div>
      </div>
    </div>
    <div class="coinInfomation__boxSection">
      <div>
        <div class="coinInfomation__boxSection__title">비트코인(Upbit)</div>
        <div v-if="upbit.currentPrice.length > 0" class="coinInfomation__boxSection__value" :class="[upbit.isUpbitPriceStatus ? 'price-up' : 'price-down']">
          <i class="fas fa-lg" :class="[upbit.isUpbitPriceStatus ? 'fa-caret-up' : 'fa-caret-down']"></i>
          {{ setComma(upbit.currentPrice[0]) }}
        </div>
      </div>
    </div>
    <div class="coinInfomation__boxSection">
      <div>
        <div class="coinInfomation__boxSection__title">김치프리미엄</div>
        <div class="coinInfomation__boxSection__value">{{ getKimchiPremium(upbit.currentPrice[0], binance.currentPrice[0]) }}%</div>
      </div>
    </div>
    <div class="coinInfomation__boxSection">
      <div>
        <div class="coinInfomation__boxSection__title">탐욕지수</div>
        <div class="coinInfomation__boxSection__value"><span class="fearOrGreedScore">{{ fearOrGreed }}</span> <span class="fearOrGreedName">({{ fearFilter(fearOrGreed) }})</span></div>
      </div>
    </div>
    <div class="coinInfomation__boxSection">
      <div>
        <!-- <div class="coinInfomation__boxSection__title">헤시레이트(EH/s)</div>
        <div class="coinInfomation__boxSection__value">167.01</div> -->
        <div class="coinInfomation__boxSection__title">추천거래소</div>
        <div class="coinInfomation__boxSection__value"><a href="https://bit.ly/3GRF5re" target="_blank">비트겟</a></div>
      </div>
    </div>
    <div class="coinInfomation__boxSection">
      <div>
        <div class="coinInfomation__boxSection__title">오늘 관심코인</div>
        <div class="coinInfomation__boxSection__value"><img :src="trendingCoin.large" class="symbolImage"><span class="symbolName">{{ trendingCoin.symbol }}</span></div>
      </div>
    </div>
    <div class="coinInfomation__boxSection">
      <div>
        <div class="coinInfomation__boxSection__title">현재 포지션</div>
        <div class="coinInfomation__boxSection__value">
          <span :class="{'price-up': bitmex.positionDirection === 'Long', 'price-down': bitmex.positionDirection === 'Short'}">
            {{ bitmex.positionDirection }}<i class="fas" :class="{'fa-level-up-alt': bitmex.positionDirection === 'Long', 'fa-level-down-alt': bitmex.positionDirection === 'Short'}"></i>
          </span>
        </div>
      </div>
    </div>
    <div class="coinInfomation__boxSection">
      <div>
        <div class="coinInfomation__boxSection__title">현재 수익률</div>
        <div :class="['coinInfomation__boxSection__value', {'price-up': bitmex.positionUnrealisedRoePcnt > 0, 'price-down': bitmex.positionUnrealisedRoePcnt < 0 }]">
          {{ bitmex.positionUnrealisedRoePcnt }}%
        </div>
      </div>
    </div>
    <div class="coinInfomation__boxSection">
      <div>
        <div class="coinInfomation__boxSection__title">오늘 매매횟수</div>
        <div class="coinInfomation__boxSection__value">34회</div>
      </div>
    </div>
  </div>
</template>

<script setup>
/**
 * 변수
 */
const props = defineProps({
  upbitBitcoin: {
    type: Number,
    required: true,
  },
  binanceBitcoin: {
    type: Number,
    required: true,
  },
  dollar: {
    type: Number,
    required: true,
  },
  fearOrGreed: {
    type: Number,
    required: true,
  },
  trendingCoin: {
    type: Object,
    required: true,
  },
  bitmexApiInfo: {
    type: Object,
    required: true,
  },
})

watch(() => props.upbitBitcoin, (newValue) => {
  upbit.currentPrice.unshift(newValue)
})
watch(() => props.binanceBitcoin, (newValue) => {
  binance.currentPrice.unshift(newValue)
})
watch(() => props.bitmexApiInfo, (newValue) => {
  connectingSocketBitmex()
})

const USD = computed(() => props.dollar)

const binance = reactive({
  socket: null,
  currentPrice: [],
  isBinancePriceStatus: false,
})
const upbit = reactive({
  socket: null,
  currentPrice: [],
  isUpbitPriceStatus: false,
})
const bitmex = reactive({
  socket: null,
  positionDirection: 0,
  positionUnrealisedRoePcnt: 0,
})

/**
 * 라이브러리
 */
const { setComma } = useCommaNumber()

/**
 * 함수
 */
const getKimchiPremium = (upbitPrice, binancePrice) => {
  const preminumValue = ((upbitPrice - binancePrice * USD.value) * 100 / (binancePrice * USD.value)).toFixed(2)

  if (preminumValue === 'NaN' || preminumValue === 'Infinity') {
    return 0
  } else {
    return preminumValue
  }
}

const connectingSocketBinance = () => {
  if (binance.socket) {
    binance.socket.close();
  }
  binance.socket = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@miniTicker')

  binance.socket.onopen = function (event) {
    console.log('socketBinance SOCKET START...', event)
  }

  binance.socket.onmessage = (event) => {
    binance.currentPrice.unshift( Math.round(JSON.parse(event.data).c) )
    if (binance.currentPrice.length > 2) {
      binance.currentPrice.pop()

      if (binance.currentPrice[0] > binance.currentPrice[1]) {
        binance.isBinancePriceStatus = true
      } else {
        binance.isBinancePriceStatus = false
      }
    }
  }
  binance.socket.onclose = function () {
    setTimeout(function() {
      connectingSocketBinance();
    }, 2000);
  }
}

const connectingSocketUpbit = () => {
  if (upbit.socket) {
    upbit.socket.close();
  }
  upbit.socket = new WebSocket('wss://api.upbit.com/websocket/v1')
  upbit.socket.binaryType = 'arraybuffer';

  upbit.socket.onopen = function (event) {
    console.log('socketUpbit SOCKET START...', event)
    upbit.socket.send(`[{ "ticket": "TEST" }, { "type": "ticker", "codes": ["KRW-BTC"] }]`)
  }

  upbit.socket.onmessage = function (event) {
    let enc = new TextDecoder('utf-8')
    let arr = new Uint8Array(event.data)
    let stringData = enc.decode(arr)
    let data = JSON.parse(stringData)

    upbit.currentPrice.unshift( Math.round(data.trade_price) )
    if (upbit.currentPrice.length > 2) {
      upbit.currentPrice.pop()

      if (upbit.currentPrice[0] > upbit.currentPrice[1]) {
        upbit.isUpbitPriceStatus = true
      } else {
        upbit.isUpbitPriceStatus = false
      }
    }
  }

  upbit.socket.onclose = function () {
    setTimeout(function() {
      connectingSocketUpbit();
    }, 2000);
  }
}

const connectingSocketBitmex = () => {
  if (bitmex.socket) {
    bitmex.socket.close();
  }
  bitmex.socket = new WebSocket('wss://ws.bitmex.com/realtime')
  
  bitmex.socket.onopen = function (event) {
    console.log('socketBitmex SOCKET START...', event)
    bitmex.socket.send(`{"op": "authKeyExpires", "args": ["${props.bitmexApiInfo.data.apiKey}", ${props.bitmexApiInfo.data.expires}, "${props.bitmexApiInfo.data.signature}"]}`)
    bitmex.socket.send(`{"op": "subscribe", "args": ["position"]}`)
  }

  bitmex.socket.onmessage = function (event) {
    const isChatMessage = (JSON.parse(event.data).action === 'update')
    if (isChatMessage) {
      const {
        currentQty,
        unrealisedRoePcnt,
      } = JSON.parse(event.data).data[0]

      bitmex.positionDirection = positionToDirection(currentQty)
      if (unrealisedRoePcnt) bitmex.positionUnrealisedRoePcnt = (unrealisedRoePcnt * 100).toFixed(2)
    }
  }

  bitmex.socket.onclose = function () {
    setTimeout(function() {
      connectingSocketBitmex();
    }, 2000);
  }
}

const fearFilter = (score) => {
  if (score >= 0 && score < 20) {
    return '매우 공포'
  } else if (score >= 20 && score < 40) {
    return '공포'
  } else if (score >= 40 && score < 60) {
    return '중립'
  } else if (score >= 60 && score < 80) {
    return '탐욕'
  } else if (score >= 80 && score < 100) {
    return '매우 탐욕'
  }
}

const positionToDirection = (position) => {
  if (position > 0) {
    return 'Long';
  } else if (position < 0) {
    return 'Short';
  } else {
    return 'Flat';
  }
}


/**
 * 훅
 */
onBeforeMount(() => {
  connectingSocketBinance()
  connectingSocketUpbit()
})
</script>