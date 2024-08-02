import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import { LoginContext, LoginProvider } from './LoginContext'; // Import context

const App = () => {
  return (
    <LoginProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              // Only render Home if logged in (context state check)
              <LoginContext.Consumer>
                {(context) => (context.isLoggedIn ? <Home /> : null)}
              </LoginContext.Consumer>
            }
          />
        </Routes>
      </BrowserRouter>
    </LoginProvider>
  );
};

export default App;
