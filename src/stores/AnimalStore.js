import Store from '../flux/Store';
import constans from '../constants';

/**
 * Стор для хранения списков животных
 * @class AnimalStore
*/
class AnimalStore extends Store {
  /**
  * Устанавливает инстанс логера в локальную область видимости
  * @param {Logger} logger
  * @param {Dispatcher} dispatcher
  */
  getInitialState() {
    return [];
  }

  /**
   * обработчик экшенов
   * @param {*} state
   * @param {*} action
  */
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
