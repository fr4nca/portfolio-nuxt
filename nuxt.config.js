import dotenv from 'dotenv';
dotenv.config();

export default {
  mode: 'universal',
  env: {
    github_token: process.env.GITHUB_TOKEN
  },
  head: {
    title: 'Victor Almeida França | Developer and Programmer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    script: [{ src: 'https://kit.fontawesome.com/57926f9989.js' }]
  },
  loading: { color: '#fff' },
  css: [],
  plugins: ['~/plugins/repos.server.js'],
  modules: [],
  build: {
    extend(config, ctx) {}
  }
};
