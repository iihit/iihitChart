<style lang="scss" scoped>
section.modal {
  position: fixed;
  bottom: 1%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
}
</style>

<template>
  <section class="modal" v-if="isModalShown">
    <p>당사에서는 귀하의 경험 개선 및 마케팅 목적으로 쿠키를 사용합니다. 당사의 쿠키 정책 또는 쿠키 관리에 대해 읽어보십시오.</p>
    <div>
      <UIButton label="모두 허용" />
      <UIButton label="모두 거부" />
    </div>
  </section>
</template>

<script setup>
/**
 * 변수
 */
const isModalShown = ref(false)
/**
 * 함수
 */
const openModal = () => {
  isModalShown.value = true
}
const closeModal = () => {
  isModalShown.value = false
}
</script>