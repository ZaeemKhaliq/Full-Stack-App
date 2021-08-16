<template>
  <div class="home-welcome">
    <h1>WELCOME TO HOME PAGE</h1>
    <p>Navigate to other pages</p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.home-welcome {
  height: calc(100vh - 8.5rem);
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    text-align: center;
    margin: 0 auto;
    font-weight: 300;
    font-size: 3rem;
    transition: all 0.2s;
    width: 95%;

    &:hover {
      filter: drop-shadow(0px 10px 4px $primary-color);
      transform: rotate(2deg);
      font-weight: 600;
      animation: rotation 0.5s 0.2s infinite;
    }
  }

  p {
    font-weight: 300;
    text-align: center;
  }

  @keyframes rotation {
    0% {
      transform: rotate(2deg);
    }
    50% {
      transform: rotate(-2deg);
    }
    100% {
      transform: rotate(2deg);
    }
  }
}

@media screen and (max-width: 800px) {
  .home-welcome {
    height: 50%;
    width: 100%;
  }
}
</style>
