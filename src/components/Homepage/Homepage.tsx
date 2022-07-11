
import Product from "../../modules/Product"
import { products as productData } from "../../fixtures/products"
import { ICart, IProduct } from "../../types/product"
import { IUser } from "../../types/user"
import { createStore, useStore } from 'usestore-react';
import Checkout from "../../model/checkout"
import { useState } from "react";
createStore('carts', []);
export default function Homepage(): JSX.Element {
    const [carts] = useStore<ICart[]>('carts')
    const [currentUser] = useStore<IUser>('currentUser')
    const [checkoutTotal, setCheckoutTotal] = useState<number>(0)
    const handleCheckout = () => {
        const co = new Checkout(currentUser.id)
        for (const cart of carts) {
            co.add(cart)
        }
        setCheckoutTotal(co.total())
    }
    return (
        <div className="pt-5">
            <div className="row">
                {productData.map((product: IProduct, index: number) => <Product product={product} key={index} />)}
            </div>
            <div>
                <h3>My Cart</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">Product</th>
                            <th scope="col">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {carts.length ? carts.map((cart: ICart, index: number) => <tr key={index}>
                            <th scope="row">{cart.product.name}</th>
                            <td>{cart.amount}</td>
                        </tr>) : <tr>
                            <td colSpan={2}><div className="text-center">Cart is empty</div></td>
                        </tr>}
                    </tbody>
                </table>
                {carts.length ? <div><button onClick={handleCheckout} className="btn btn-secondary">Checkout</button></div> : ""}
                {carts.length && checkoutTotal ? <h3 className="pt-3">Total: {checkoutTotal.toFixed(2)}$</h3> : ''}
            </div>
        </div>
    )
}