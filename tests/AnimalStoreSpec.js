import { expect } from 'chai';
import AnimalStore from '../src/stores/AnimalStore';
import Dispatcher from '../src/flux/Dispatcher';
import LoggerStub from './stabs/LoggerStub';


describe('AnimalStore extends Store - class', () => {
  let store;

  beforeEach(() => {
    store = new AnimalStore(
      new Dispatcher(),
      new LoggerStub(),
    );
  });

  describe('Метод isEqual', () => {
    it('Верно сверяет два объекта', () => {
      const boolean = store.isEqual({ a: 1, b: 49 }, { a: 1, b: 49 });

      expect(boolean).to.equal(true);
    });

    it('Верно сверяет два массива', () => {
      const boolean = store.isEqual([1, 'some', 'array'], [1, 'some', 'array']);

      expect(boolean).to.equal(true);
    });
  });

  describe('Метод getInitialState', () => {
    it('Возвращает пустой массив', () => {
      const initialState = store.getInitialState();
      const boolean = Array.isArray(initialState) && initialState.length === 0;

      expect(boolean).to.equal(true);
    });
  });
});

