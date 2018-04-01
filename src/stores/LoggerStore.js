import Store from '../flux/Store';

/**
 * Класс для вывода логов (проходящих через редьюс)
 * @class LoggerStore
*/
class LoggerStore extends Store {
  /**
  * Устанавливает инстанс логера в локальную область видимости
  * @param {Logger} logger
  * @param {Dispatcher} dispatcher
  */
  constructor(logger, dispatcher) {
    super(dispatcher);

    this.logger = logger;
  }

  /**
   * Возвращает initial state
   * @returns {Array}
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
    this.logger.write(JSON.stringify(action));

    return state;
  }
}

export default LoggerStore;
