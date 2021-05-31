<template>
  <div class="article">
    <ul class="article__list">
      <li class="article__item" v-for="article in articles" :key="article.id">
        <a class="article__link" target="_blank" :href="article.url">
          <article class="article__content">
            <div class="article__image">
              <img
                :src="article.media[0]['media-metadata'][2].url"
                alt="Photo"
                v-if="article.media[0]"
              />
            </div>
            <div class="article__content-text">
              <h2 class="article__title" :style="{ color: randomColor() }">
                {{ article.title }}
              </h2>

              <p class="article__tags">
                <span class="article__tags-keywords"> Keywords </span>
                {{ article.adx_keywords | dellPunctuation }}
              </p>

              <p class="article__description">{{ article.abstract }}</p>
            </div>
            <span class="article__date">
              {{ article.updated | formatDate }}
            </span>
          </article>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["articles"]),
  },
  methods: {
    ...mapActions(["getDataFromApi"]),
    randomColor() {
      return "#" + ((Math.random() * 0xffffff) << 0).toString(16);
    },
  },
  mounted() {
    this.getDataFromApi();
  },
};
</script>

<style>
ul {
  padding: 0;
  margin: 0;
}
li {
  list-style: none;
  padding: 0;
  margin: 0;
}
.article__link {
  color: #fff;
  text-decoration: none;
}

.article__list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.article__item {
  padding: 5px 5px 35px 5px;
  margin: 0 5px 10px 5px;
  background-color: #424242;
  position: relative;
}

.article__content {
  display: flex;
  flex-direction: column;
  text-align: left;
}
.article__image {
  position: relative;
  padding-bottom: 65%;
}
.article__image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.article__content-text {
  text-align: left;
  padding-bottom: 10px;
}
.article__title {
  color: #fff;
  font-size: 30px;
  margin: 0;
}
.article__tags {
  font-size: 14px;
}
.article__tags-keywords {
  display: block;
  font-size: 20px;
  text-transform: uppercase;
  font-weight: bold;
  color: #9e9e9e;
}
.article__description {
  padding: 0;
  margin: 0 0 10px 0;
  font-size: 22px;
  line-height: 21px;
}
.article__date {
  position: absolute;
  bottom: 15px;
  color: #9e9e9e;
}
@media (min-width: 680px) {
  .article__item {
    flex: 1 1 40%;
  }
}
@media (min-width: 1024px) {
  .article__item {
    flex: 1 1 30%;
  }
}
@media (min-width: 1500px) {
  .article__item {
    flex: 1 1 20%;
  }
}
</style>