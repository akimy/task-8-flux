/**
 * @class Dispatcher - класс для работы с экшенами и стором
 */
class Dispatcher {
  constructor() {
    this.callbacks = {};
    this.lastID = 1;
  }

  /**
   * Регестрирует callback
   * @param {Function} callback
   */
  register(callback) {
    const id = `ID_${this.lastID++}`;
    this.callbacks[id] = callback;
    return id;
  }

  /**
   * Вызывает callback с полезной нагрузкой
   * @param {Object} payload - полезная нагрузка
   */
  dispatch(payload) {
    for (const id in this.callbacks) {
      this.callbacks[id](payload);
    }
  }
}

export default Dispatcher;

