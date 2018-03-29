import { EventEmitter } from 'events';

class Store extends EventEmitter {
  constructor(dispatcher) {
    super();
    this.event = 'change';
    this.dispatcher = dispatcher;

    this.state = this.getInitialState();

    dispatcher.register((payload) => {
      this.dispatchPayload(payload);
    });
  }

  dispatchPayload(action) {
    const first = this.state;
    const second = this.reduce(first, action);

    let changed = false;

    if (!this.equal(first, second)) {
      this.state = second;
      changed = true;
    }

    if (changed) {
      this.emit(this.event);
    }
  }

  equal(fisrt, second) {
    return fisrt === second;
  }

  addChangeListener(callback) {
    return this.addListener(this.event, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(this.event, callback);
  }

  getState() {
    return this.state;
  }
}

export default Store;
