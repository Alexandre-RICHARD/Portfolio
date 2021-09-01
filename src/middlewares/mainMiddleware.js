import {} from 'src/actions/mainActions';

import {
  baseUrl,
} from 'src/middlewares/baseURL';

const main = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    default:
      next(action);
  }
};

export default main;
