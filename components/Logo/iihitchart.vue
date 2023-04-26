<style lang="scss" scoped>
.brandLogo {
    font-family: 'netmarbleB', sans-serif;
    font-size: 1.7rem;
    font-weight: 700;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    color: #333;
    .rotateLetter10 {
        display: inline-block;
        font-size: 1.6rem;
        transform: rotate(-10deg); /* 회전각도 설정 */
        transform-origin: center center; /* 중심점을 중앙으로 설정 */
    }
    .rotateLetter20 {
        display: inline-block;
        font-size: 1.6rem;
        transform: rotate(-20deg); /* 회전각도 설정 */
        transform-origin: center center; /* 중심점을 중앙으로 설정 */
    }
}
</style>
<template>
    <div class="brandLogo">이힛<span class="rotateLetter10">차</span><span class="rotateLetter20">트</span></div>
</template>