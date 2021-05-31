import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    articles: [],
    urls: {
      github: 'https://github.com/RomanZaritskyi',
      linkedin: 'https://www.linkedin.com/in/roman-zaritskyi-8036b8166',
    },
  },
  getters: {
    articles(state) {
      return state.articles
    },
    urls(state) {
      return state.urls
    },

  },
  mutations: {
    setDataToState: (state, articles) => {
      state.articles = articles;
    },
  },

  actions: {
    getDataFromApi({ commit }) {
      return axios
        .get('https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=ZtLujSzv0OA7ZP9BJs8cvsVAV97ffHlA')
        .then((response) => {
          commit('setDataToState', response.data.results);
          return response
        })
        .catch((error) => {
          console.log(error);
          return error

        });
    }
  },
});

