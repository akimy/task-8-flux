class Logger {
  constructor(container) {
    this.container = container;
  }

  getDateString() {
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes() < 10 ? '0' : ''}${now.getMinutes()}:${now.getSeconds()
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
      const span = document.createElement('span');
      span.innerHTML = `> ${message} ${this.getDateString()}`;
      this.container.appendChild(span);
      this.scroll();
    }
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
