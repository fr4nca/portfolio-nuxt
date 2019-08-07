export const state = () => ({
  repos: []
});

export const mutations = {
  updateRepos: (state, payload) => {
    state.repos = payload;
  }
};

export const actions = {
  async fetchRepos({ state, commit }) {
    if (state.repos.length) return;

    try {
      let repos = await fetch(
        'https://api.github.com/users/fr4nca/repos?page=1&per_page=13&sort=created_at'
      ).then(res => res.json());

      repos = repos
        .filter(el => el.fork === false)
        .map(
          ({
            id,
            name,
            description,
            stargazers_count,
            homepage,
            html_url
          }) => ({
            id,
            name,
            description,
            stargazers_count,
            homepage,
            html_url
          })
        );

      commit('updateRepos', repos);
    } catch (err) {
      console.log(err);
    }
  }
};
