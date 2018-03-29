import Store from '../flux/Store';

class LoggerStore extends Store {
  constructor(logger, dispatcher) {
    super(dispatcher);

    this.logger = logger;
  }

  getInitialState() {
    return [];
  }

  reduce(state, action) {
    this.logger.write(JSON.stringify(action));

    return state;
  }
}

export default LoggerStore;

