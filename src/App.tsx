import { Provider } from 'react-redux';
import { store } from './state/store';
import CellList from './components/cell-list';

function App() {
  return (
    <Provider store={store}>
      <div>
        <CellList />
      </div>
    </Provider>
  );
}

export default App;
