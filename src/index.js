import React from 'react';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';

import Header from './components/Header';
import TweetBoxes from './components/App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Header />
    <TweetBoxes />
  </React.StrictMode>
);

reportWebVitals(sendToVercelAnalytics);
