<template>
  <section class="header-container">
    <div class="header-division">
      <div class="title-container">
        <nuxt-link to="/">
          <h1>FULL STACK APP</h1>
        </nuxt-link>
      </div>
      <div class="nav-links-container">
        <nuxt-link to="/tutorials" class="nav-link" exact>
          <div>
            <p>SHOW TUTORIALS</p>
          </div>
        </nuxt-link>
        <nuxt-link to="/add-tutorial" class="nav-link" exact>
          <div>
            <p>ADD TUTORIAL</p>
          </div>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.header-container {
  height: 3.5rem;
  background-color: $primary-color;
  color: white;

  a {
    color: white;
    text-decoration: none;
  }

  h1 {
    margin: 0;
  }
}

.header-division {
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 50%;
}

.title-container {
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-links-container {
  width: 60%;
  display: flex;
  justify-content: space-between;

  a.nuxt-link-active {
    background-color: $primary-hover-color;
  }
}

.nav-link {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;
  cursor: pointer;
  padding: 0 1rem;
  text-decoration: none;
  color: white;

  &:hover {
    background-color: $primary-hover-color;
  }

  p {
    margin: 0;
  }
}
</style>
