<template>
  <section class="home-page-container">
    <div class="left">
      <div></div>
    </div>
    <Home />
    <div class="right">
      <div></div>
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
    height: 5rem;
    width: 5rem;
    background-color: $primary-color;
    transform: scale(4.3) rotate(45deg);
    position: absolute;
    left: -2.5rem;
    z-index: -1;
  }
}

.right {
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    height: 5rem;
    width: 5rem;
    background-color: $primary-color;
    transform: scale(4.3) rotate(45deg);
    position: absolute;
    right: -2.5rem;
    z-index: -1;
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
  }

  .right {
    border-radius: 50rem 50rem 0 0;
    background-color: $primary-color;

    div {
      display: none;
    }
  }

  .left {
    border-radius: 0 0 50rem 50rem;
    border: 1px solid white;
    background-color: $primary-color;

    div {
      display: none;
    }
  }
}
</style>
