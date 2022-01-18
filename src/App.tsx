import { store } from './redux/store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <h1>E-bot</h1>
      </Provider>
    </>
  );
};

export default App;
