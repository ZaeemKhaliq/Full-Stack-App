<template>
  <section class="home-page-container">
    <div class="left"></div>
    <Home />
    <div class="right"></div>
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
  background-color: $primary-color;
  border: 1px solid black;
}

.left {
  border-radius: 0 50rem 50rem 0;
}

.right {
  border-radius: 50rem 0rem 0rem 50rem;
}

@media screen and (max-width: 700px) {
  .home-page-container {
    height: calc(100vh - 7.5rem);
    flex-direction: column;
  }

  .home-welcome,
  .left,
  .right {
    width: 100%;
  }

  .left,
  .right {
    height: 25%;
  }
  .home-welcome {
    height: 50%;
  }

  .right {
    border-radius: 50rem 50rem 0 0;
  }

  .left {
    border-radius: 0 0 50rem 50rem;
    border-top-color: white;
  }
}
</style>
