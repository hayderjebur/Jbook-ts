import { Provider } from 'react-redux';
import { store } from './state/store';

import TextEditor from './components/text-editor';

function App() {
  return (
    <Provider store={store}>
      <div>
        <TextEditor />
      </div>
    </Provider>
  );
}

export default App;
