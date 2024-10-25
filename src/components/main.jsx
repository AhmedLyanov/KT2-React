
import React, { useState } from "react";
import ProductsData from './product'; 

function Main() {
    const [products, setProducts] = useState(ProductsData); 

    function addProduct() {
        const name = prompt("Введите название товара");
        const price = prompt("Введите цену товара");
        const quantity = prompt("Введите количество товара");
        if (name && price && quantity) {
            const newProduct = {
                id: products.length + 1, 
                name: name,
                price: parseFloat(price), 
                quantity: parseInt(quantity) 
            };
            setProducts([...products, newProduct]); 
        }
    }

    function AddLimit(productId) {
        setProducts(products.map(product => {
            if (product.id === productId) {
                const newQuantity = product.quantity + 1;
                const newPrice = product.price * 2; 
                return {
                    ...product,
                    quantity: newQuantity,
                    price: newPrice.toFixed(2) 
                };
            }
            return product;
        }));
    }

    function DeleteLimit(productId) {
        setProducts(products.map(product => {
            if (product.id === productId) {
         
                if (product.quantity <= 1) {
                    return product; 
                }
                const newQuantity = product.quantity - 1;
                const newPrice = newQuantity > 0 ? product.price / 2 : product.price; 
                return {
                    ...product,
                    quantity: newQuantity,
                    price: newPrice.toFixed(2) 
                };
            }
            return product;
        }));
    }

    return (
        <main>
            <div className="Set-Product-Button">
                <button onClick={addProduct}>Добавить новый товар</button>
            </div>
            <div id="Container-Board-Box">
                {products.map(product => (
                    <div className="Product-Card" key={product.id}>
                        <div className="Information-Card">
                            <div id="Named">Товар: {product.name}</div>
                            <div id="Price">Цена:
                                <span id="PriceCount">{product.price}</span>
                            </div>
                            <div className="CountPlusMinus" id="quartity">
                                <span id="LimitQuantity">Количество: {product.quantity}</span>
                                <div className="PlusMinusSystem">
                                    <button onClick={() => AddLimit(product.id)} className="AddQunatity">+</button>
                                    <button onClick={() => DeleteLimit(product.id)} className="DeleteQuantity">-</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default Main;