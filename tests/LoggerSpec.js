import { expect } from 'chai';
import LoggerStub from './stabs/LoggerStub';
import LogContainerMock from './mocks/LogContainerMock';


describe('Logger - class', () => {
  let logger;
  let logContainerMock;
  beforeEach(() => {
    const scrollHeight = 200;
    logContainerMock = new LogContainerMock(scrollHeight);
    logger = new LoggerStub(logContainerMock);
  });

  it('Log-контейнер скроллится во время логирования', () => {
    const expectedScrollTop = 200;

    logger.write('Something');
    const scrollTop = logContainerMock.getScrollTop();

    expect(scrollTop).to.equal(expectedScrollTop);
  });

  it('Метод getDateString() Возвращает временную метку в формате HH:MM:SS', () => {
    const timeString = logger.getDateString();
    const isOk = /^[0-2][0-9]:[0-5][0-9]:[0-5][0-9]$/.test(timeString);

    expect(isOk).to.equal(true);
  });

  it('Метод clear() очищает лог', () => {
    logger.write('something');
    let isClear = false;
    if (!logContainerMock.isLogClear()) {
      logger.clear();
      isClear = logContainerMock.isLogClear();
    }

    expect(isClear).to.equal(true);
  });

  it('Метод write записывает в дом-элемент нужное сообщение', () => {
    const expectedMessage = `> Very important message ${logger.getDateString()}`;

    logger.write('Very important message');
    const { innerHTML: message } = logContainerMock.getChild();

    expect(message).to.equal(expectedMessage);
  });
});

