import { expect } from 'chai';
import AnimalStore from '../src/stores/AnimalStore';
import Dispatcher from '../src/flux/Dispatcher';
import LoggerStub from './stabs/LoggerStub';


describe('Store - class', () => {
  describe('Метод isEqual', () => {

  });
  it('Верно сверяет два объекта', () => {
    const boolean = new AnimalStore(
      new Dispatcher(),
      new LoggerStub(),
    ).isEqual({ a: 1, b: 49 }, { a: 1, b: 49 });

    expect(boolean).to.equal(true);
  });

  it('Верно сверяет два массива', () => {
    const boolean = new AnimalStore(
      new Dispatcher(),
      new LoggerStub(),
    ).isEqual([1, 'some', 'array'], [1, 'some', 'array']);

    expect(boolean).to.equal(true);
  });
});

