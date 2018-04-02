import { expect } from 'chai';
import LoggerStore from '../src/stores/LoggerStore';
import Dispatcher from '../src/flux/Dispatcher';
import LoggerStub from './stabs/LoggerStub';
import LogContainerMock from './mocks/LogContainerMock';
import constants from '../src/constants';

describe('AnimalStore extends Store - class', () => {
  let logContainerMock;
  let logger;
  let store;

  beforeEach(() => {
    logContainerMock = new LogContainerMock();
    logger = new LoggerStub(logContainerMock);
    store = new LoggerStore(logger, new Dispatcher());
  });

  describe('Метод getInitialState', () => {
    it('Возвращает пустой массив', () => {
      const initialState = store.getInitialState();
      const boolean = Array.isArray(initialState) && initialState.length === 0;

      expect(boolean).to.equal(true);
    });
  });

  describe('Метод reduce', () => {
    let initialState;

    beforeEach(() => {
      initialState = ['Fox', 'Dog', 'Cat'];
    });

    it('Возвращает такой же стейт какой и получил', () => {
      const expected = initialState;
      const data = store.reduce(initialState, {
        type: constants.LOAD_ANIMALS,
        payload: initialState,
      });

      expect(data).to.deep.equal(expected);
    });

    it('Логирует название экшена и время', () => {
      const expected = {
        innerHTML: `> Action call: LOAD_ANIMALS ["Fox","Dog","Cat"] ${logger.getDateString()}`,
      };

      store.reduce(initialState, {
        type: constants.LOAD_ANIMALS,
        payload: initialState,
      });

      const data = logContainerMock.getChild();

      expect(data).to.deep.equal(expected);
    });
  });
});

