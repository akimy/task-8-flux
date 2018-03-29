import View from './View';
import AnimalStore from '../stores/AnimalStore';
import LoggerStore from '../stores/LoggerStore';
import Logger from '../Logger';
import { loadAnimals, removeAnimal, addAnimal } from '../actions';

class HomeView extends View {
  constructor(dispatcher) {
    super(dispatcher);

    this.logger = new Logger(document.querySelector('.log__text'));

    this.animalStore = new AnimalStore(this.dispatcher);
    this.loggerStore = new LoggerStore(this.logger, this.dispatcher);
  }

  init() {
    this.animalStore.addChangeListener(() => {
      this.render();
    });

    this.initDom();

    loadAnimals(this.dispatcher);
  }

  initDom() {
    this.button = document.querySelector('.view-stub__apply');
    this.animals = document.querySelector('.animals');
    this.input = document.querySelector('.view-stub__input');
    this.logClear = document.querySelector('.log__clear');

    this.button.addEventListener('click', () => {
      this.onAddAnimal();
    });

    this.input.addEventListener('keydown', (e) => {
      if (e.keyCode === 13) {
        this.onAddAnimal();
      }
    });

    this.logClear.addEventListener('click', () => {
      this.logger.clear();
    });
  }

  render() {
    const animals = this.animalStore.getState();

    while (this.animals.lastChild) {
      this.animals.removeChild(this.animals.lastChild);
    }

    animals.forEach((name, index) => {
      const block = document.createElement('div');
      block.classList.add('animals__item');

      const span = document.createElement('span');
      span.innerHTML = name;

      const button = document.createElement('button');
      button.innerHTML = 'X';
      button.classList.add('item__button_remove');
      button.addEventListener('click', () => {
        this.onRemoveAnimal(index);
      });

      block.appendChild(span);
      block.appendChild(button);
      this.animals.appendChild(block);
    });
  }

  onRemoveAnimal(index) {
    removeAnimal(this.dispatcher, index).catch((error) => {
      this.logger.write(error.message);
    });
  }

  onAddAnimal() {
    addAnimal(this.dispatcher, this.input.value).then(() => {
      this.input.value = '';
    }).catch((error) => {
      this.logger.write(error.message);
    });
  }
}

export default HomeView;
