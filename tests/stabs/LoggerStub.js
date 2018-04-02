import Logger from '../../src/Logger';

class LoggerStub extends Logger {
  createDomElement() {
    return {};
  }
}

export default LoggerStub;
