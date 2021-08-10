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

  height: 100%;
}

.title-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
}

.nav-links-container {
  display: flex;
  margin-left: 2rem;

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
  margin: 0 0.5rem;

  &:hover {
    background-color: $primary-hover-color;
  }

  p {
    margin: 0;
  }
}

@media screen and (max-width: 700px) {
  .header-container {
    height: 2.5rem;
  }
  .nav-link {
    p {
      font-size: 0.8rem;
    }
  }

  .header-container {
    h1 {
      font-size: 1.4rem;
    }
  }
}

@media screen and (max-width: 600px) {
  .header-container {
    height: auto;
  }
  .header-division {
    flex-direction: column;
  }
  .title-container {
    width: 100%;
    padding: 0;
    height: 3rem;
    border-bottom: 1px solid white;
  }
  .nav-links-container {
    margin: 0;
    height: 2.5rem;
    justify-content: center;
  }
}

@media screen and (max-width: 350px) {
  .nav-link {
    p {
      font-size: 0.6rem;
    }
  }
}
</style>
