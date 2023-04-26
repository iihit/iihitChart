<style lang="scss" scoped>
button {
  padding: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 100%;
  outline: 0;
  grid-gap: 8px;
  gap: 8px;
  background: linear-gradient(to right, rgb(245, 241, 235) 0%, rgb(233, 209, 232) 50%, rgb(233, 209, 232) 100%);
  color: #000;
  border: 1px solid #000;
  border-radius: 4px;
  font-size: 1rem;
  line-height: 1.5;
  overflow: hidden;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: all .14s ease-out;
  cursor: pointer;
  &:hover {
    box-shadow: 4px 4px 0 #000;
    transform: translate(-4px,-4px);
  }
  &:focus-visible{
    outline-offset: 1px;
  }

  /* Mobile */
  @media only screen and (max-width: 767px) {
    
  }

  /* Tablet */
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    
  }

  /* Desktop */
  @media only screen and (min-width: 992px) {
    
  }
}

</style>

<template>
  <div class="styled-input wide">
    <button>{{ label }}</button>
  </div>
</template>

<script setup>
/**
 * 변수
 */
const props = defineProps({
  label: {
    type: String,
    required: true,
  }
})
</script>
