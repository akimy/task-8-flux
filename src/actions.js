import constants from './constants';
import sendToServer from './sendToServer';

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

function removeAnimal(dispatcher, index) {
  dispatcher.dispatch({
    type: constants.REQUEST_START,
    payload: index,
  });

  return sendToServer(index).then((result) => {
    dispatcher.dispatch({
      type: constants.REMOVE_ANIMAL,
      payload: result,
    });

    dispatcher.dispatch({
      type: constants.REQUEST_END,
      payload: index,
    });
  });
}

export {
  loadAnimals,
  addAnimal,
  removeAnimal,
};
