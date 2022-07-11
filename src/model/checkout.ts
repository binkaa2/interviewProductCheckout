import { ICart } from "../types/product";

enum EPricingRules {
    Microsoft = 1,
    Amazon = 2,
    Facebook = 3
}

export default class Checkout {
    pricingRules: EPricingRules;
    carts: ICart[];
    constructor(pricingRules: EPricingRules){
        this.pricingRules = pricingRules
        this.carts = []
    }
    add(item: ICart) {
        this.carts = [...this.carts, item]
    }
    total(){
        let totalPrice = 0;
        for (const cart of this.carts){
            switch(this.pricingRules){
                case 1:
                    if(cart.product.type === 1 && cart.amount % 3 === 0){
                        totalPrice += (cart.amount - cart.amount / 3) * cart.product.price
                    } else{
                        totalPrice += cart.amount * cart.product.price
                    }
                    break;
                case 2:
                    if(cart.product.type === 3 ){
                        totalPrice += (cart.amount) * 19.99
                    } else{
                        totalPrice += cart.amount * cart.product.price
                    }
                    break;
                case 3:
                    if(cart.product.type === 2 && cart.amount % 5 === 0){
                        totalPrice += (cart.amount - cart.amount / 5) * cart.product.price
                    } else{
                        totalPrice += cart.amount * cart.product.price
                    }
                    break;
                default:
                    totalPrice += cart.amount * cart.product.price
                    break;
            }
        }
        return totalPrice
    }
} 