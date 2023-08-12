import React from 'react';
import AppRouter from "../router/AppRouter/AppRouter";
import { AuthContextProvider } from '../../components/auth/AuthContextProvider';

import './App.css';

const App = () => {
  return (
    <AuthContextProvider>
      <AppRouter />
    </AuthContextProvider>
  )
};

export default App;
