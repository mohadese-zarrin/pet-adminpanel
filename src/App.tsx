import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
const loading = (
  <div >
    <div ></div>
  </div>
)
const Login = React.lazy(() => import('./pages/login'))
const MainContent = React.lazy(() => import('./containers/mainContent'))
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Router>
      <React.Suspense fallback={loading}>
        <Switch>
          <Route exact path='/login' >
            <Login />
          </Route>
          <Route  path='/'>
            <MainContent />
          </Route>
        </Switch>
      </React.Suspense>
    </Router>
  );
}

export default App;
