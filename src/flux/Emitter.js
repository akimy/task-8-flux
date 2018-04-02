class Emitter {
  constructor() {
    this.events = new Map();
  }

  /**
   * Подписывает хендлер на событие
   * Амортизированное O(1) на получение уже существующих хендлеров на это событие
   * Если такого события нет создается хеш таблица с ключом - имя функции, значением -
   * тело функции
   * И добавляется в хеш-таблицу где ключ - имя события, значение - хеш таблица с методами
   * Все сложности - O(1) в сумме сложность метода on получается константная;
   * @param {String} event
   * @param {Function} handler
  */
  on(event, handler) {
    let handlers = this.events.get(event);
    if (!handlers) {
      const handlers = new Map();
      handlers.set(handler.name, handler);
      this.events.set(event, handlers);
    } else {
      handlers = handlers.set(handler.name, handler);
      this.events.set(event, handlers);
    }
  }

  /**
   * Отписывает хендлер от события
   * Сложность - амортизированное O(1) - для получения всех событий, амортизированное O(1)
   * для удаления хендлера из хеш-таблицы по ключу - названию функции в сумме сложность
   * константная
   * @param {String} event
   * @param {Function} handler
  */
  off(event, handler) {
    const handlers = this.events.get(event);
    handlers.delete(handler.name);
  }

  /**
   * Эмитит событие и запускает все подписанные функции
   * Сложность амортизированное O(1) на получение всех хендлеров для эвента +
   * O(n) - для последовательного запуска в сумме сложность O(n)
   * @param {String} event
   */
  emit(event) {
    this.events.get(event).forEach(el => el());
  }
}

export default Emitter;

