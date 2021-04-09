import './styles/global.module.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './config/ReactotronConfig'

import { Header } from './components/Header';
import { Footer } from './components/Footer';

import Routes from './routes';

import store from './store';

export function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Routes />
          <Footer />
          <ToastContainer autoClose={4000} />
        </BrowserRouter>
      </Provider>
    </>
  );
}
