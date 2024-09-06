import './App.css';
import {Provider} from "react-redux"
import store from './store/store';
import Form from './Form';
import List from './List';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Form/>
      <List/>
    </div>
    </Provider>
  );
}

export default App;
