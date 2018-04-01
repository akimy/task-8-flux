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
   * Метод редьюсер получает текущий стейт и action, возвращает измененный стейт
   * в данном случае используется для логирования action Logger инстансом
   * @param {*} state
   * @param {*} action
  */
  reduce(state, action) {
    this.logger.write(`Action call: ${action.type} ${JSON.stringify(action.payload)}`);

    return state;
  }
}

export default LoggerStore;
