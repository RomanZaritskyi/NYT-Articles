<template>
  <div class="header">
    <div class="container">
      <div class="header__inner">
        <div class="header__logo">NYT Articles</div>

        <div class="header__links">
          <a class="linkedin" :href="urls.linkedin" target="_blank"
            ><span class="_icon-linkedin"></span
          ></a>
          <a class="github" :href="urls.github" target="_blank"
            ><span class="_icon-github"></span
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    urls() {
      return this.$store.state.urls;
    },
  },
};
</script>

<style  scoped>
.header {
  background-color: #4242426c;
  margin-bottom: 10px;
}
.header__inner {
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: space-between;
}
.header__logo {
  font-size: 30px;
}
.header__links {
}
.header__links a {
  color: #fff;
  text-decoration: none;
  margin-right: 10px;
  font-size: 30px;
  transition: all 0.2s linear;
}
.header__links a:hover {
  color: #000;
  opacity: 1;
}
.header__links a:last-child {
  margin-right: 0;
}
</style>