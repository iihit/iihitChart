<style lang="scss" scoped>
#pageLogin {
  display: grid;
  grid-template-rows: 72px 1fr;
  height: 100vh;
  background: linear-gradient(352.43deg,hsla(0,0%,100%,.2),rgba(237, 200, 255, 0.2) 78.01%,rgba(254, 255, 187, 0.2)),#fff;
}
.logoSection {
  margin: 0 auto;
  max-width: 1024px;
  text-align: center;
}
.logoSection__container {
  display: flex;
  // justify-content: start;
  align-items: center;
  // margin: 0;
  // padding: 0;
  height: 100%;
}
.formSection {
  display: grid;
  place-items: center;
}
.inputContainer {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
}
.inputContainer__title {
  display: block;
  padding: 0 1rem;
  text-align: center;
}
h1 {
  margin-bottom: 1rem;
  font-size: 1.6rem;
  font-weight: 700;;
}
h2 {
  font-size: 1.1rem;
  font-weight: 400;;
}
.policySection {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  // align-content: center;
  div {
    // margin: 0 0.5rem;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      text-decoration: none;
    }
    span {
      margin: 0 0.3rem;
    }
  }
}
</style>

<template>
  <div id="pageLogin">
    <div class="logoSection">
      <div class="logoSection__container">
        <nuxt-link to="/" style="text-decoration: none;"><LogoIihitchart /></nuxt-link>
      </div>
    </div>
    <div class="formSection">
      <div class="inputContainer">
        <div class="inputContainer__title">
          <h1>새로운 지식, 새로운 길 발견한 것을 환영합니다</h1>
          <h2>시작하려면 로그인 또는 등록하십시오.</h2>
        </div>
        <div class="inputContainer__input">
          <UIInput label="이메일" />
          <UIButton label="등록" />
        </div>
      </div>
      <div class="socialContainer">
        <button>텔레그램 로그인</button>
        <button>구글 로그인</button>
      </div>
    </div>
    <UIModal />
    <!-- <div>
      <p>당사에서는 귀하의 경험 개선 및 마케팅 목적으로 쿠키를 사용합니다. 당사의 쿠키 정책 또는 쿠키 관리에 대해 읽어보십시오.</p>
      <UIButton label="모두 허용" />
      <UIButton label="모두 거부" />
    </div> -->
    <div class="policySection">
      <div><nuxt-link to="/">약관</nuxt-link><span>•</span></div>
      <div><nuxt-link to="/">개인정보</nuxt-link><span>•</span></div>
      <div><nuxt-link to="/">쿠키 설정</nuxt-link></div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'full',
})
</script>
