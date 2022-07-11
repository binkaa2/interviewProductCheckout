
import { ICart, IProduct } from "../types/product"
import { useStore } from 'usestore-react';
import { useState } from "react";
interface IProductProps {
    product: IProduct
}
export default function Product({ product }: IProductProps): JSX.Element {
    const [carts, setCarts] = useStore<ICart[]>('carts')
    const [amount, setAmount] = useState<number>(0)
    const handleAddCart = (): void => {
        let _carts = [...carts]
        const cartIndex = _carts.findIndex((cart: ICart) => cart.product.id === product.id)
        if(amount){
            if(cartIndex !== -1){
                _carts[cartIndex].amount = amount 
            }else{
                _carts.push({
                    product,
                    amount
                })
            }
        } else {
            _carts = _carts.filter((cart: ICart) => cart.product.id !== product.id)
        }
        setCarts(_carts)
    }
    return (
        <div className="col-sm-6 col-md-6 col-lg-4">
            <div className="bg-white rounded-lg overflow-hidden mb-4 shadow">
                <div>
                    <img style={{ width: "100%", height: "300px" }} src={product.image} alt="product_image" />
                    <div className="overflow-hidden p-2">
                        <h4><a href="#!" className="text-dark">{product.name}</a></h4>
                        <div className="d-flex justify-content-between">
                            <a href="#!">{product.description}</a>
                        </div>
                    </div>
                    <div>
                        <hr />
                        <div className="d-flex justify-content-between mx-2">
                            <span className="pt-2">{product.price}$</span>
                            <div>
                                <div className="input-group mb-3">
                                    <div>
                                        <button onClick={() => amount > 0 && setAmount(amount - 1)} className="btn btn-outline-secondary" type="button" id="button-addon1"><i className="fa fa-minus"></i></button>
                                    </div>
                                    <input type="text" className="form-control" placeholder="" aria-describedby="button-addon1" value={amount} />
                                    <div>
                                        <button onClick={() => setAmount(amount + 1)} className="btn btn-outline-secondary" type="button" id="button-addon1"><i className="fa fa-plus"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 text-center">
                            <button onClick={handleAddCart} className="btn btn-primary">Add Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}