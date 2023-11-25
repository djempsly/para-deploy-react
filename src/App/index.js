import React from 'react';
import '../App.css';
import { AppUI } from './AppUI';
import { ProviderItem } from '../Context';

function App() {
return (
  <ProviderItem>
       <AppUI />
  </ProviderItem>
)
}

export default App;
