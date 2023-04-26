<style lang="scss" scoped>
input {
  padding: 30px;
  border: 0;
  width: 100%;
  font-size: 1rem;
  color: #333;
  border-radius: 4px;
}

input:focus {
  // outline: 0;
  outline: 2px solid #333;
}

input:focus ~ label, input:valid ~ label {
  font-size: 0.8em;
  color: #999;
  top: -10px;
  -webkit-transition: all 0.225s ease;
  transition: all 0.225s ease;
}

.styled-input {
  float: left;
  width: 293px;
  margin: 1rem 0;
  position: relative;
  border-radius: 4px;
}
.styled-input label {
  color: #999;
  padding: 1.3rem 30px 1rem 30px;
  position: absolute;
  top: 10px;
  left: 0;
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
  pointer-events: none;
}
.styled-input.wide { 
  width: 650px;
  max-width: 100%;
}

@media only screen and (max-width: 768px){
  .styled-input {
    width: 100%;
  }
}

</style>

<template>
  <div class="styled-input wide">
    <input type="text" required />
    <label>{{ label }}</label> 
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
