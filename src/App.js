import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LoginApp from './login/LoginApp';


function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<TodoList/>}></Route>
              <Route path='/login' element={<LoginApp/>}></Route>
          </Routes>
    </BrowserRouter>
  );
}

export default App;