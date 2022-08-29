import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import { useContext } from "react";
import { CategoriesContext } from "./contexts/categories.context";
import ShopCategory from "./routes/shop-category/shop-category.component";

const App = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />}></Route>
        {Object.keys(categoriesMap).map((title) => (
          <Route path={`shop/${title}`} key={title} element={<ShopCategory title={title}/>} />
        ))}
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
