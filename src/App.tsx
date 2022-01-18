import { store } from './redux/store';
import { Provider } from 'react-redux';
import {
  BrowserRouter,
  Route,
  Switch,
  RouteComponentProps,
} from 'react-router-dom';
import routes from './routes';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            {routes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  render={(props: RouteComponentProps<any>) => (
                    <route.component {...props} />
                  )}
                ></Route>
              );
            })}
          </Switch>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
