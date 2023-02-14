import React from 'react';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';

import Header from './components/Header';
import TweetBoxes from './components/TweetBoxes';
import Footer from './components/Footer';
import DarkMode from './components/DarkMode';
import HelpModal from './components/Help';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Header />
    <HelpModal />
    <DarkMode />
    <TweetBoxes />
    <Footer />
  </React.StrictMode>
);

reportWebVitals(sendToVercelAnalytics);
