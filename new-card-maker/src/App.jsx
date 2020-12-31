import Login from './components/login/Login';
import styles from './App.module.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Maker from './components/maker/Maker';
function App({authService}) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login authService={authService}/>
          </Route>
          <Route exact path="/maker">
            <Maker authService={authService}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
