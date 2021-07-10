import { Header } from "./components/Header";
import { OrdersCheckout } from "./components/OrdersCheckout";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/global.scss";

import "./services";
import { CartStorageProvider } from "./contexts/CartContext";

function App() {
  return (
    <CartStorageProvider>
      <Header />
      <OrdersCheckout />
    </CartStorageProvider>
  );
}

export default App;
