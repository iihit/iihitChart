<style lang="scss" scoped>
.mainIntroduceMeSection {
  display: grid;
  grid-template-columns: minmax(320px, 1fr);
  gap: 1rem;
}

.youtubeVideoSection__container {
  background-color: #fff;
  padding: 1rem;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  overflow: hidden;
}

.video__title {
  font-size: 1.4rem;
  font-weight: 700;
}

.video__sub {
  font-size: 1.2rem;
  font-weight: 300;
  margin-top: 0.5rem;
}

.video__iframe {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
}

.video__iframe iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>

<template>
  <section class="mainIntroduceMeSection">
    <div class="youtubeVideoSection__container">
      <div class="video__title">선물매매 가이드</div>
      <div class="video__sub">1달 수익률 150,000% 인증 영상</div>
      <div class="video__iframe">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/qVW9ZrffN80"
          title="매매기법"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script>
</script>