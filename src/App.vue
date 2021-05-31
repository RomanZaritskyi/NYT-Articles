<template>
  <div id="app">
    <div class="wrapper">
      <app-header></app-header>
      <app-articles></app-articles>
    </div>
  </div>
</template>
<script>
import Header from "./components/Header.vue";
import Articles from "./components/Articles.vue";

export default {
  name: "App",
  components: {
    "app-header": Header,
    "app-articles": Articles,
  },
};
</script>

<style>
@font-face {
  font-family: "icons";
  src: url("./fonts/icons.ttf?9n9pdu") format("truetype"),
    url("./fonts/icons.woff?9n9pdu") format("woff"),
    url("./fonts/icons.svg?9n9pdu#icons") format("svg");
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

[class^="_icon-"],
[class*=" _icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: "icons" !important;
  speak: never;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

._icon-github:before {
  content: "\e900";
}
._icon-linkedin:before {
  content: "\e901";
}

@import url(https://fonts.googleapis.com/css?family=Roboto:100,100italic,300,300italic,regular,italic,500,500italic,700,700italic,900,900italic);
body {
  background: #303030;
  color: #fff;
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Roboto";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.container {
  max-width: 100%;
  padding: 0 10px;
}
</style>
