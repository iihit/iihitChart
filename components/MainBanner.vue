<style lang="scss" scoped>
.mainBannerSection {
  margin-top: 2rem;
  padding: 2rem 0;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.mainBannerSection__title {
  font-size: 1.6rem;
  font-weight: 700;
  color: #444444;
}

form {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
}

label {
  margin-bottom: 0.5rem;
  display: block;
  font-size: 1.2rem;
  font-weight: 600;
  color: #444444;
}

// input[type="email"] {
//   margin: 0 0.5rem;
//   padding: 0.5rem 1rem;
//   font-size: 1.2rem;
//   border-radius: 0.25rem;
//   border: none;
//   outline: none;
// }
input {
  border: 2px solid #E0E6EA;
  outline: none;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

input:focus {
  border: none;
  outline: none;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  border: 2px solid #f1cfd7;
}


button[type="submit"] {
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  border-radius: 0.25rem;
  border: none;
  outline: none;
  background-color: #00254c;
  color: #ffffff;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #000000;
}

button[type="submit"]:focus {
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
}
</style>

<template>
  <div class="mainBannerSection">
    <div class="mainBannerSection__title">무료 선물거래 전자책 받기</div>
    <form>
      <div>
        <input autocomplete="email" class="" name="email" placeholder="Enter your email" type="email">
      </div>
      <div class="">
        <button class="" type="submit">가입하기</button>
      </div>
    </form>
  </div>
</template>
