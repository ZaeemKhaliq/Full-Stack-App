<template>
  <section class="footer-container">
    <div class="footer-division">
      <p class="copyright-text">
        Copyright &copy; {{ getDate }} -
        <a
          href="https://github.com/ZaeemKhaliq"
          target="_blank"
          rel="noreferrer noopener"
          >Zaeem Khaliq</a
        >
      </p>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    getDate() {
      var date = new Date();
      return date.getFullYear();
    }
  }
};
</script>

<style lang="scss">
.footer-container {
  height: 5rem;
  background-color: black;
  color: white;
}

.footer-division {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.copyright-text {
  text-align: center;
  margin: 0;

  a {
    text-decoration: none;
    color: #4da4ef;
  }
}
</style>
