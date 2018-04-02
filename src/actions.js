import constants from './constants';
import sendToServer from './sendToServer';

/**
 * Экшен загрузки животных
 * @param {Dispatcher} dispatcher
 */
function loadAnimals(dispatcher) {
  dispatcher.dispatch({
    type: constants.REQUEST_START,
    payload: null,
  });

  return sendToServer([
    'Dog', 'Cat', 'Parrot',
  ]).then((result) => {
    dispatcher.dispatch({
      type: constants.LOAD_ANIMALS,
      payload: result,
    });

    dispatcher.dispatch({
      type: constants.REQUEST_END,
      payload: result,
    });
  });
}

/**
 * Экшен для добавления животных
 * @param {Dispatcher} dispatcher
 */
function addAnimal(dispatcher, animal) {
  dispatcher.dispatch({
    type: constants.REQUEST_START,
    payload: animal,
  });

  return sendToServer(animal).then((result) => {
    dispatcher.dispatch({
      type: constants.ADD_ANIMAL,
      payload: result,
    });

    dispatcher.dispatch({
      type: constants.REQUEST_END,
      payload: result,
    });
  });
}

/**
 * Экшен для удаления животных из списка
 * @param {Dispatcher} dispatcher
 */
function removeAnimal(dispatcher, index) {
  dispatcher.dispatch({
    type: constants.REQUEST_START,
    payload: `index ${index}`,
  });


  // Это "Optimistic update" - мы убираем животное из списка раньше чем пришел ответ от сервера
  dispatcher.dispatch({
    type: constants.REMOVE_ANIMAL,
    payload: index,
  });

  return sendToServer(index).then((index) => {
    // Диспатч Remove Animal стоило расположить здесь если мы хотим дождаться ответа сервера
    dispatcher.dispatch({
      type: constants.REQUEST_END,
      payload: `index ${index}`,
    });
  });
}

export {
  loadAnimals,
  addAnimal,
  removeAnimal,
};
