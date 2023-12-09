import Header from "./components/Header";
import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";



export const totalQuantities = createContext(0);

const App = () => {
    let [quatities, setQuantities] = useState(0);

    return (
        <div className="">
            <BrowserRouter>
                <Header quatities={quatities} >
                    <Routes>
                        <Route path="/*" element={<Main addToTheCart={addToTheCart} changeQuantities={changeQuantities}/>} />
                        <Route path="/products" element={<Main addToTheCart={addToTheCart} changeQuantities={changeQuantities}/>} />
                        <Route path="/cart" element={<Cart setQuantities={setQuantities} changeQuantities={changeQuantities} products={products} totalPrice={totalPrice} setProducts={setProducts}/>} />
                        <Route path="/success" element={<Success setProducts={setProducts} setQuantities={setQuantities} />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/successSent" element={<SuccessSent />} />
                    </Routes>    
                </Header>
            </BrowserRouter>
        </div>  
    )
}

export default App;