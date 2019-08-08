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
      let reposData = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        body: JSON.stringify({
          query: `
          {
            viewer {
              repositories(first: 12, orderBy: { direction: DESC, field: CREATED_AT }) {
                edges {
                  node {
                    id
                    name
                    createdAt
                    updatedAt
                    url
                    description
                    primaryLanguage {
                      name
                    }
                    owner {
                      login
                      url
                    }
                  }
                }
              }
            }
          }
            `
        }),
        headers: {
          Authorization: `token ${process.env.github_token}`
        }
      }).then(res => res.json());
      const { edges } = reposData.data.viewer.repositories;

      commit('updateRepos', edges);
    } catch (err) {
      console.log(err);
    }
  }
};
