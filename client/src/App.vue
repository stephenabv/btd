<template>
  <div id="app">
      <div class="d-flex justify-content-center fixed-top">
          <button id="back-to-top" @click="scrollTop" :class="{ 'd-none': isHeaderVisible }"><i
                  class="fa fa-chevron-up d-flex justify-content-center"></i></button>
      </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'TopButton',
  data() {
    return {
      isHeaderVisible: true
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {

    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      // Get the height of the header/navbar element
      const headerHeight = document.querySelector('nav').offsetHeight;

      // Get the scroll position of the window
      const scrollPosition = window.scrollY;

      // Check if the scroll position is below the header/navbar
      this.isHeaderVisible = scrollPosition < headerHeight;
    },
    scrollTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#back-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  border: none;
  background-color: #dfe3e8;
  color: #000;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.3s ease-in-out;
}

#back-to-top:hover {
  opacity: 3;
}

#back-to-top {
  font-size: 20px;
  /* default font size */
}
</style>
