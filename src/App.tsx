// CONTEXTS
import { CartStorageProvider } from "./contexts/CartContext";

// COMPONENTS
import { Header } from "./components/Header";
import { ShowAllCategories } from "./components/ShowAllCategories";

// STYLES
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/global.scss";

// API
import "./services";

function App() {
  return (
    <CartStorageProvider>
      <Header />
      <ShowAllCategories />
    </CartStorageProvider>
  );
}

export default App;
