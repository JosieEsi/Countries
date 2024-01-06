import { MainRoutes } from "./Routes/MainRoutes";
import { Header } from "./components/Header";
import React from 'react';
import './App.css'
import { DarkModeProvider } from './DarkModeContext';

function App() {
  return (
   <>
   <DarkModeProvider>
    <Header />
    <MainRoutes />
    </DarkModeProvider>
   </>
  );
}

export default App;
