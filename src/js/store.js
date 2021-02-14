import { createStore } from 'framework7';

const store = createStore({
  state: {
    uuid: null,
  },
  actions: {
    setUuid({ state }, uuid) {
      state.uuid = uuid;
    },
  },
  getters: {
    uuid: ({ state }) => state.uuid,
  },
});

export default store;
