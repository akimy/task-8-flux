class LogContainerMock {
  constructor(scrollHeight) {
    this.scrollHeight = scrollHeight;
    this.lastChild = true;
  }

  getScrollTop() {
    return this.scrollTop;
  }

  appendChild(element) {
    this.element = element;
  }

  getChild() {
    return this.element;
  }

  removeChild() {
    this.lastChild = false;
  }

  isLogClear() {
    return !this.lastChild;
  }
}

export default LogContainerMock;

