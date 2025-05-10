import './index.css';

import App from './App.tsx';
import { AuthContextProvider } from './context/AuthContext/AuthContextProvider.tsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </StrictMode>
);
