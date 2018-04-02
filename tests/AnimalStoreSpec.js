import { expect } from 'chai';
import AnimalStore from '../src/stores/AnimalStore';
import Dispatcher from '../src/flux/Dispatcher';
import LoggerStub from './stabs/LoggerStub';
import constants from '../src/constants';

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

  describe('Метод reduce', () => {
    let initialState;

    beforeEach(() => {
      initialState = ['Fox', 'Dog', 'Cat'];
    });

    it('Возвращает данные положенные в стор при экшене LOAD ANIMALS', () => {
      const expected = ['Fox', 'Dog', 'Cat'];

      const data = store.reduce(['Python', 'JS'], {
        type: constants.LOAD_ANIMALS,
        payload: initialState,
      });

      expect(data).to.deep.equal(expected);
    });

    it('Возвращает стор с новым элементом при вызове ADD ANIMALS', () => {
      const expected = ['Fox', 'Dog', 'Cat', 'Human'];

      const data = store.reduce(initialState, {
        type: constants.ADD_ANIMAL,
        payload: 'Human',
      });

      expect(data).to.deep.equal(expected);
    });

    it('Возвращает стор с удаленным элементом при вызове REMOVE ANIMALS', () => {
      const expected = ['Fox', 'Dog'];

      const data = store.reduce(initialState, {
        type: constants.REMOVE_ANIMAL,
        payload: 2,
      });

      expect(data).to.deep.equal(expected);
    });
  });
});

