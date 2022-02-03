import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ForgotPassword from './routes/ForgotPassword';
import Login from './routes/Login';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App/>}>
            <Route index element={<Navigate to='/login'/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/esqueci_minha_senha' element={<ForgotPassword/>}/>
            <Route path='*' element={<h1>There's nothing here :(</h1>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
