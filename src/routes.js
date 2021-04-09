import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/produto/:id" component={Product} />
      <Route path="/carrinho" component={Cart} />
    </Switch>
  )
}
