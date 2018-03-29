import Store from '../flux/Store';
import constans from '../constants';

class AnimalStore extends Store {
  getInitialState() {
    return [];
  }

  reduce(state, action) {
    const { type, payload } = action;

    switch (type) {
      case constans.LOAD_ANIMALS:
        return payload;

      case constans.ADD_ANIMAL:
        return [
          ...state,
          payload,
        ];

      case constans.REMOVE_ANIMAL:
        return state.filter((animal, index) => index !== payload);

      default:
        return state;
    }
  }
}

export default AnimalStore;
