import Emitter from './Emitter';

/**
 * @class Store - класс для наследования хранилище данных в Flux-архитектуре
*/
class Store extends Emitter {
  /**
   * Получает в локальную область видимости изначальный стейт, регистрирует callback на
   * this.dispatchPayload
   * @param {Dispatcher} dispatcher
   */
  constructor(dispatcher, logger) {
    super();
    this.event = 'change';
    this.dispatcher = dispatcher;
    this.logger = logger;
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
    const first = this.state;
    const second = this.reduce(this.state, action);
    if (!this.isEqual(first, second)) {
      this.state = second;
      this.emit(this.event);
    }
  }

  /**
   * Сверяет стейт с предыдущим значением - если они не равны - значит стейт нужно обновить
   * @param {*} first
   * @param {*} second
   */
  isEqual(first, second) {
    return JSON.stringify(first) === JSON.stringify(second);
  }

  /**
   * Используем метод эвент эмиттера для вызова колбека по событию 'change'
   * @param {Function} callback
   * @returns {StoreInstance}
   */
  addChangeListener(callback) {
    return this.on(this.event, callback);
  }

  /**
   * Перестаем вызывать калбэк при событии 'change'
   * @param {Function} callback
   */
  removeChangeListener(callback) {
    this.off(this.event, callback);
  }

  /**
   * Возвращает стейт из стора в нашем случае массив животных
   * @returns {*}
  */
  getState() {
    this.logger.write(`Store.js: current State: 
    <pre class="log__store">${JSON.stringify(this.state)}</pre>`);
    return this.state;
  }
}

export default Store;
