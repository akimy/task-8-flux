import HomeView from './views/HomeView';
import Dispatcher from './flux/Dispatcher';

// Создание инстансов классов и запуск приложения
const dispatcher = new Dispatcher();
const app = new HomeView(dispatcher);

app.init();
