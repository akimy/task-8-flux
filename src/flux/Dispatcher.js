/**
 * @class Dispatcher - класс для работы с экшенами и стором
 */
class Dispatcher {
  constructor() {
    this.callbacks = {};
    this.lastID = 1;
  }

  /**
   * Регестрирует экшен
   * @param {Function} callback
   */
  register(callback) {
    const id = `ID_${this.lastID++}`;
    this.callbacks[id] = callback;
    return id;
  }

  /**
   * Диспатчит экшен
   * @param {Object} payload - полезная нагрузка
   */
  dispatch(payload) {
    this.pendingPayload = payload;
    try {
      for (const id in this.callbacks) {
        this.callbacks[id](this.pendingPayload);
      }
    } finally {
      delete this.pendingPayload;
    }
  }
}

export default Dispatcher;

