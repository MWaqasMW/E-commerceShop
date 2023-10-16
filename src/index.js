
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import {store ,persistor} from './redux/store';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Main() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
      easing: 'ease',
    });

    const handleScroll = () => {
      AOS.refresh();
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
    <React.StrictMode>
      <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
        </PersistGate>
      </Provider>
    </React.StrictMode>
  );
}

root.render(<Main />);

reportWebVitals();
