<template>
  <section class="home-page-container">
    <div class="left">
      <div></div>
      <main></main>
    </div>
    <Home />
    <div class="right">
      <div></div>
      <main></main>
    </div>
  </section>
</template>

<script>
import Home from "../components/Home.vue";

export default {
  components: {
    Home
  }
};
</script>

<style lang="scss">
.home-page-container {
  display: flex;
}

.left,
.right {
  width: 25%;
}

.left {
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    height: 100%;
    width: 100%;
    overflow: hidden;
    display: flex;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      left: -2.5rem;
      width: 5rem;
      height: 5rem;
      background-color: $primary-color;
      align-self: center;
      transform: rotate(45deg) scale(4.3);
    }
  }
}

.right {
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    height: 100%;
    width: 100%;
    overflow: hidden;
    display: flex;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      right: -2.5rem;
      width: 5rem;
      height: 5rem;
      background-color: $primary-color;
      align-self: center;
      transform: rotate(45deg) scale(4.3);
    }
  }
}

@media screen and (max-width: 800px) {
  .home-page-container {
    height: calc(100vh - 7.5rem);
    flex-direction: column;
    justify-content: space-between;
  }

  .left,
  .right {
    width: 100%;
  }

  .left,
  .right {
    height: 25%;
    overflow: hidden;
    position: relative;
  }

  .right {
    div {
      display: none;
    }

    main {
      height: 5rem;
      width: 5rem;
      background-color: $primary-color;
      transform: scale(4.2) rotate(45deg);
      z-index: -1;
      position: absolute;
      bottom: -10rem;
    }
  }

  .left {
    div {
      display: none;
    }

    main {
      height: 5rem;
      width: 5rem;
      background-color: $primary-color;
      transform: scale(4.2) rotate(45deg);
      z-index: -1;
      position: absolute;
      top: -10rem;
    }
  }
}
</style>
