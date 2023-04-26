<style lang="scss" scoped>
.footerSection {
  display: block;
  width: 100%;
  // background: linear-gradient(to right, #ffe0f4, #e1e1e1);
  padding: 3rem 0 2rem 0;
  .companyinfo {
    margin-bottom: 1rem;
    font-size: 1.2rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  .companydetail {
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.6;
  }

  a {
    color: #444;
    text-decoration: none;
  }

  @media (max-width: 767px) {
    padding: 3rem 1.5rem;
    text-align: center;

    .companyinfo {
      padding-top: 3rem;
      font-size: 1rem;
      letter-spacing: 1px;
    }

    .companydetail {
      font-size: 0.9rem;
      line-height: 1.5;
    }

    .danger {
      padding-top: 3rem;
      font-size: 0.8rem;
      letter-spacing: 1px;
    }
  }
}

</style>

<template>
  <section class="footerSection">
    <div class="container">
      <div class="companyinfo">© 2023. 차트를이힛 Co. All right reserved.</div>
      <div class="companydetail">
        <p>차트를이힛 | 대표 조재혁 | 사업자등록번호 <a href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=6035300431" target="_blank">603-53-00431</a> | 통신판매업신고 2021-서울금천-0078</p>
        <p>서울특별시 금천구 가산디지털2로 98, 2동 1107호 (IT캐슬) | 이메일 <a href="mailto:iihit2@naver.com" target="_blank">iihit2@naver.com</a></p>
        <div style="margin-top: 1rem;"><nuxt-link to="/terms">이용약관 및 개인정보 처리방침</nuxt-link></div>
      </div>
    </div>
  </section>
</template>

<script>
</script>

<script>
export default {
  name: 'the-footer',
}
</script>