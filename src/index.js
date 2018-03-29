import HomeView from './views/HomeView';
import Dispatcher from './flux/Dispatcher';

const dispatcher = new Dispatcher();
const app = new HomeView(dispatcher);

app.init();
