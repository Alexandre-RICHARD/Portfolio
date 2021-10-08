import {
  CHANGE_VALUE,
} from 'src/actions/mainActions';

const initialState = {
  headerClass: 'navList--box',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE: {
      return {
        ...state,
        [action.name]: action.value,
      };
    }
    default:
      return state;
  }
};
