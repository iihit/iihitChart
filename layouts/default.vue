<style lang="scss" scoped>
header {
  background-color: #fff;
  position: sticky;
  top: 0;
  z-index: 999;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
  height: 72px;
}
main {
  min-height: calc(100vh - 120px);
}
footer {
  z-index: 999;
  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.1);
}
</style>

<template>
  <header>
    <TopBar></TopBar>
  </header>
  <main>
    <NuxtPage></NuxtPage>
  </main>
  <footer>
    <BottomBar></BottomBar>
  </footer>
</template>
