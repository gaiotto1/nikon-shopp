import './styles/global.module.scss';

import { BrowserRouter } from 'react-router-dom';

import { Header } from './components/Header';

import Routes from './routes';

export function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
}
