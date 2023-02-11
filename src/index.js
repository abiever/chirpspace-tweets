import React from 'react';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';

import Header from './components/Header';
import Tweets from './components/Tweets';
import Buttons from './components/Buttons';
import App from './components/App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>
);

reportWebVitals(sendToVercelAnalytics);
