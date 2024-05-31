import { createRoot } from 'react-dom/client';
import App from "./App";
import * as React from 'react'

window.addEventListener('DOMContentLoaded', () => {
  const root = createRoot(document.getElementById('root')!);
  root.render(<App />);
})
