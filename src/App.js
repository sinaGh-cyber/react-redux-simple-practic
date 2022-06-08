import logo from './logo.svg';
import './App.css';
import CakeContainer from './components/CakeContainer/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <CakeContainer />
      </Provider>
    </div>
  );
}

export default App;
