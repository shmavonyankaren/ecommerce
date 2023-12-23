import Header from "./components/Header";
import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import Contact from "./pages/Contact";
import SuccessSent from "./pages/SuccessSent";
import Error from "./pages/Error";

export const totalQuantities = createContext(0);

const App = () => {
  let [quatities, setQuantities] = useState(0);
  const [products, setProducts] = useState([]);
  const totalPrice = products
    .map((product) => product.price)
    .reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
  const addToTheCart = (item) => {
    setProducts([
      ...products,
      {
        ...item,
      },
    ]);
    console.log(products);
  };

  const changeQuantities = function (param) {
    if (param === "dec") {
      const newQuatities = quatities - 1;
      setQuantities(newQuatities);
      return;
    }
    const newQuatities = quatities + 1;
    setQuantities(newQuatities);
  };

  return (
    <div>
      <BrowserRouter>
        <Header quatities={quatities}>
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  addToTheCart={addToTheCart}
                  changeQuantities={changeQuantities}
                />
              }
            />
            <Route path="/*" element={<Error />} />
            <Route
              path="/products"
              element={
                <Main
                  addToTheCart={addToTheCart}
                  changeQuantities={changeQuantities}
                />
              }
            />
            <Route
              path="/cart"
              element={
                <Cart
                  setQuantities={setQuantities}
                  changeQuantities={changeQuantities}
                  products={products}
                  totalPrice={totalPrice}
                  setProducts={setProducts}
                />
              }
            />
            <Route
              path="/success"
              element={
                <Success
                  setProducts={setProducts}
                  setQuantities={setQuantities}
                />
              }
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/successSent" element={<SuccessSent />} />
          </Routes>
        </Header>
      </BrowserRouter>
    </div>
  );
};

export default App;
