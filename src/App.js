import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Toggle from './components/ThemeToggle';
import Home from './Home';
import Section from './Section';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path='/'
          element={
            <>
              <Toggle />
              <Home />
            </>
          }
        />
        <Route
          exact
          path='/section'
          element={
            <>
              <Toggle />
              <Section />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
