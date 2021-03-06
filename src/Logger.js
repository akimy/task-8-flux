/**
 * @class Logger - класс для логирования помещает записи в элемент на странице
*/
class Logger {
  constructor(container) {
    this.container = container;
  }

  /**
   * Возвращает текущую дату в формате hh:mm:ss
  */
  getDateString() {
    const now = new Date();
    return `${now.getHours() < 10 ? '0' : ''}${now.getHours()}:${now.getMinutes()
      < 10 ? '0' : ''}${now.getMinutes()}:${now.getSeconds()
      < 10 ? '0' : ''}${now.getSeconds()}`;
  }

  /**
   * Автопрокручивает контейнер с логами
  */
  scroll() {
    this.container.scrollTop = this.container.scrollHeight;
  }

  /**
   * Записывает сообщение в контейнер
   * @param {String} message
  */
  write(message) {
    if (this.container) {
      const span = this.createDomElement();
      span.innerHTML = `> ${message} ${this.getDateString()}`;
      this.container.appendChild(span);
      this.scroll();
    }
  }

  createDomElement() {
    return document.createElement('span');
  }

  /**
   * Очищает лог
  */
  clear() {
    if (this.container) {
      while (this.container.lastChild) {
        this.container.removeChild(this.container.lastChild);
      }
    }
  }
}

export default Logger;
