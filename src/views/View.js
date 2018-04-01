/**
 * @class View - абстрактный класс
*/
class View {
  /**
   * Помещает в локальную область видимости диспетчер
   * @param {Dispatcher} dispatcher
   */
  constructor(dispatcher) {
    this.dispatcher = dispatcher;
  }
}

export default View;
