<style lang="scss" scoped>
#pageExchange {

}

.pageSignBoard {
  padding: 6rem 0;
  margin: 0 auto;
  text-align: center;
  border-bottom: 1px solid #000;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}
h1 {
  margin-bottom: 1rem;
  font-size: 2.8rem;
  font-weight: 400;
}
h2 {
  font-size: 1.2rem;
  font-weight: 300;
}

table {
    border-collapse: collapse;
    margin-bottom: 20px;
    table-layout: fixed;
    width: 100%;
}

td,th {
    padding: 6px 10px;
    text-align: left
}

td.number,th.number {
    text-align: right
}

table.more-spacing td,table.more-spacing th {
    padding-bottom: 20px;
    padding-top: 20px
}

table.more-spacing td:first-child,table.more-spacing th:first-child {
    padding-left: 20px
}

table.more-spacing td:last-child,table.more-spacing th:last-child {
    padding-right: 20px
}

thead tr {
    border-bottom: 1px solid #9b9b9b
}

thead th {
    font-weight: bold;
    padding-bottom: 6px;
    vertical-align: bottom
}

thead th.number,thead th.checkbox {
    text-align: center
}

tbody th {
    font-weight: bold
}

tbody tr {
    border-top: 1px solid #E0E0E0
}

tbody tr:first-child {
    border-top: none
}

tbody tr.table-row-success {
    background: #e4f0cf
}

tbody tr.table-row-highlighted {
    background: #FFF8DE
}

.table-zebra tbody tr,.table-zebra-dark tbody tr,tbody tr.table-zebra-even,tbody tr.table-zebra-odd {
    border-top: none
}

.table-zebra tbody tr:nth-child(even) {
    background: #F3F5FA
}

.table-zebra-dark tbody tr:nth-child(even) {
    background: #4f4477
}

tbody tr.table-zebra-odd {
    background: #F3F5FA
}

tbody tr.table-zebra-odd.table-row-success {
    background: #cee4a8
}

tbody tr.table-zebra-odd.table-row-highlighted {
    background: #ffedab
}

tbody tr.table-zebra-even+.table-zebra-even td,tbody tr.table-zebra-odd+.table-zebra-odd td {
    padding-top: 0
}

img {
    display: inline-block;
    height: auto;
    max-width: 100%
}

.error,.errors {
    color: #CE1836
}

.content-secondary {
    color: #656363
}

.content-tertiary {
    color: #999
}

.clearfix:after {
    clear: both;
    content: ".";
    display: block;
    font-size: 0;
    height: 0;
    visibility: hidden
}

ul.no-chrome {
    margin: 0;
    padding: 0
}

ul.no-chrome>li {
    list-style-type: none
}

li.no-chrome {
    list-style-type: none
}

ul.checklist li {
    list-style-type: none;
    padding-left: 40px;
    position: relative
}

ul.checklist li:before,ul.checklist li:after {
    background: #5F2EE5;
    content: "";
    display: block;
    left: 12px;
    position: absolute;
    top: 10px;
    width: 3px
}

ul.checklist li:before {
    height: 20px;
    transform: rotate(45deg)
}

ul.checklist li:after {
    height: 10px;
    transform: rotate(-45deg) translateX(-12px)
}

.invisible {
    height: 1px;
    left: -9999px;
    overflow: hidden;
    position: absolute;
    width: 1px
}

.invisible-inline {
    height: 1px;
    opacity: 0.01;
    overflow: hidden;
    position: absolute;
    width: 1px
}

#compareTable {
  padding: 5rem 0;
  background: #473C70;
  color: #fff
}

#compareTable h2 {
    font-size: 48px
}

#compareTable .columns {
    margin-bottom: 80px
}

#compareTable p {
    font-size: 20px;
    max-width: 510px
}

#compareTable th {
    font-size: 20px
}

.compareTable__details {
    text-align: center;
    width: 200px
}

.compareTable__details.active {
    color: transparent;
    position: relative
}

.compareTable__details.active:before,.compareTable__details.active:after {
    background-color: #47BFA4;
    bottom: calc(50% - 7px);
    content: "";
    display: block;
    left: 50%;
    position: absolute;
    width: 3px
}

.compareTable__details.active:before {
    height: 8px;
    margin-left: -8px;
    transform: rotate(-45deg)
}

.compareTable__details.active:after {
    height: 14px;
    margin-left: -1px;
    transform: rotate(45deg)
}

a.register {
  padding: 0.7rem 1rem;
  background-color: #c7fae8;
  border: 0;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
}

.updated {
  margin-bottom: 1rem;
  font-size: 1rem;
  font-weight: 300;
}
</style>

<template>
  <div id="pageExchange">
    <div class="pageSignBoard">
      <h1>2023년 선물 거래소</h1>
      <h2>한눈에 장점을 비교해 보십시오.</h2>
    </div>
    <section id="compareTable">
      <div class="container">
        <div class="updated">마지막 업데이트: 2023.4.25</div>
        <table id="compareTable" class="table-zebra table-zebra-dark more-spacing">
          <thead>
            <tr>
              <th class="compareTable__label">특징</th>
              <th class="compareTable__details">바이비트</th>
              <th class="compareTable__details">비트겟</th>
              <th class="compareTable__details">빙엑스</th>
              <!-- <th class="compareTable__details">MEXC</th> -->
              <th class="compareTable__details">비트멕스</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="compareTable__label">거래량</td>
              <td class="compareTable__details">12.9조 원</td>
              <td class="compareTable__details">9.2조 원</td>
              <td class="compareTable__details">5.6조 원</td>
              <!-- <td class="compareTable__details">4.7조 원</td> -->
              <td class="compareTable__details">6,700억 원</td>
            </tr>
            <tr>
              <td class="compareTable__label">시장가/지정가</td>
              <td class="compareTable__details">0.06% / 0.01%</td>
              <td class="compareTable__details">0.06% / 0.02%</td>
              <td class="compareTable__details">0.04% / 0.02%</td>
              <!-- <td class="compareTable__details">0.02% / 0%</td> -->
              <td class="compareTable__details">0.075% / 0.02%</td>
            </tr>
            <tr>
              <td class="compareTable__label">할인률</td>
              <td class="compareTable__details">20%</td>
              <td class="compareTable__details">50%</td>
              <td class="compareTable__details">20%</td>
              <!-- <td class="compareTable__details">50%</td> -->
              <td class="compareTable__details">10%</td>
            </tr>
            <tr>
              <td class="compareTable__label">할인코드</td>
              <td class="compareTable__details"><a class="register" href="https://bit.ly/3HVChuC" target="_blank">가입하기</a></td>
              <td class="compareTable__details"><a class="register" href="https://bit.ly/3GRF5re" target="_blank">가입하기</a></td>
              <td class="compareTable__details"><a class="register" href="https://bit.ly/3FcpK6E" target="_blank">가입하기</a></td>
              <!-- <td class="compareTable__details"><button class="register">가입하기</button></td> -->
              <td class="compareTable__details"><a class="register" href="https://bit.ly/3h1sO9u" target="_blank">가입하기</a></td>
            </tr>
            <tr>
              <td class="compareTable__label">장점</td>
              <td class="compareTable__details">선물거래소 1위</td>
              <td class="compareTable__details">한국인 선호도 1위</td>
              <td class="compareTable__details">지수, 원자재 거래 가능</td>
              <!-- <td class="compareTable__details">지정가 수수료 무료</td> -->
              <td class="compareTable__details">유저 인터페이스 1위</td>
            </tr>
            <tr>
              <td class="compareTable__label">출시일</td>
              <td class="compareTable__details">2018년 3월</td>
              <td class="compareTable__details">2018년 4월</td>
              <td class="compareTable__details">2018년 5월</td>
              <!-- <td class="compareTable__details">2018년 4월</td> -->
              <td class="compareTable__details">2014년 4월</td>
            </tr>
            <tr>
              <td class="compareTable__label">트래블룰</td>
              <td class="compareTable__details">업비트, 빗썸, 코인원</td>
              <td class="compareTable__details">업비트, 빗썸, 코인원</td>
              <td class="compareTable__details">빗썸, 코인원</td>
              <!-- <td class="compareTable__details"></td> -->
              <td class="compareTable__details">업비트, 빗썸, 코인원</td>
            </tr>
            <tr>
              <td class="compareTable__label">모바일 앱</td>
              <td class="compareTable__details active"></td>
              <td class="compareTable__details active"></td>
              <td class="compareTable__details active"></td>
              <!-- <td class="compareTable__details active"></td> -->
              <td class="compareTable__details active"></td>
            </tr>
            <tr>
              <td class="compareTable__label">로고
                <!-- <span class="tooltip">
                  <span class="tooltip-target">?</span>
                  <span class="tooltip-content">Pilot can provide supporting schedules for depreciation, amortization, prepaid expenses, and unearned revenue. If you have additional needs please contact us and we'd be happy to help.</span>
                </span> -->
              </td>
              <td class="compareTable__details"><a href="https://bit.ly/3HVChuC" target="_blank"><img src="https://logotyp.us/files/bybit.svg?ver20230225"></a></td>
              <td class="compareTable__details"><a href="https://bit.ly/3GRF5re" target="_blank"><img src="https://logotyp.us/files/bitget.svg?ver20230225"></a></td>
              <td class="compareTable__details"><a href="https://bit.ly/3FcpK6E" target="_blank"><img src="https://logotyp.us/files/bingx.svg"></a></td>
              <!-- <td class="compareTable__details"></td> -->
              <td class="compareTable__details"><a href="https://bit.ly/3h1sO9u" target="_blank"><img src="https://logotyp.us/files/bitmex.svg"></a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>
<script setup>
</script>
