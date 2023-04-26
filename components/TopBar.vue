<style lang="scss" scoped>
nav {
  height: 100%;
  width: 100%;
  .pcBar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0;
    height: 100%;
  }
  .pcBar__left {
    display: flex;
    align-items: center;
  }
  .pcBar__right {
    display: flex;
    align-items: center;
  }
  .pcBar__item {
    color: #4c4c5b;
    text-decoration: none;
    font-weight: 700;
    font-size: 1rem;
    padding: 1rem;
    transition: all 0.3s ease;
    // &:hover {
    //   background: rgba(0, 0, 0, 0.1);
    //   border-radius: 5px;
    // }
  }
}
</style>

<template>
  <nav class="container">
    <div class="pcBar">
      <div class="pcBar__left">
        <nuxt-link to="/" class="pcBar__item brandLogo"><LogoIihitchart /></nuxt-link>
        <nuxt-link to="/introduction" class="pcBar__item">소개</nuxt-link>
        <nuxt-link to="/courses" class="pcBar__item">교육과정</nuxt-link>
        <!-- <nuxt-link to="/trading-coaching" class="pcBar__item">실전코칭</nuxt-link> -->
        <!-- <nuxt-link to="/streaming" class="pcBar__item">요약노트</nuxt-link> -->
        <nuxt-link to="/newbie" class="pcBar__item">코린이</nuxt-link>
        <!-- <nuxt-link to="/community" class="pcBar__item">커뮤니티</nuxt-link> --> <!-- 코린이 하위 메뉴로 넣자. -->
        <nuxt-link to="/utility" class="pcBar__item">거래도구</nuxt-link>
        <nuxt-link to="/exchange" class="pcBar__item">거래소</nuxt-link>
      </div>
      <div class="pcBar__right">
        <nuxt-link to="login" class="pcBar__item">로그인</nuxt-link>
        <nuxt-link to="signup" class="pcBar__item">가입하기</nuxt-link>
      </div>
    </div>
    <!-- <div class="pad">
    </div> -->
    <div class="mobile">

    </div>
  </nav>
</template>