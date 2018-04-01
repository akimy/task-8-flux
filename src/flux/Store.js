import { EventEmitter } from 'events';

/**
 * @class Store - класс для наследования хранилище данных в Flux-архитектуре
*/
class Store extends EventEmitter {
  /**
   * Получает в локальную область видимости изначальный стейт, регистрирует callback на
   * this.dispatchPayload
   * @param {Dispatcher} dispatcher
   */
  constructor(dispatcher) {
    super();
    this.event = 'change';
    this.dispatcher = dispatcher;

    this.state = this.getInitialState();

    dispatcher.register((payload) => {
      this.dispatchPayload(payload);
    });
  }

  /**
   * Обновляет стейт, эмитит событие 'change'
   * @param {Object} action
   */
  dispatchPayload(action) {
    this.state = this.reduce(this.state, action);
    this.emit(this.event);
  }

  /**
   * Используем метод эвент эмиттера для вызова колбека по событию 'change'
   * @param {Function} callback
   * @returns {StoreInstance}
   */
  addChangeListener(callback) {
    return this.addListener(this.event, callback);
  }

  /**
   * Перестаем вызывать калбэк при событии 'change'
   * @param {Function} callback
   */
  removeChangeListener(callback) {
    this.removeListener(this.event, callback);
  }

  /**
   * Возвращает стейт из стора в нашем случае массив животных
   * @returns {*}
  */
  getState() {
    return this.state;
  }
}

export default Store;
