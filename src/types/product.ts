
export enum ProductType {
    SmallPizza = 1,
    MediumPizza = 2,
    LargePizza = 3
}

export type IProduct = {
    id: number,
    name: string,
    description: string,
    image: string,
    price: number,
    amount: number,
    type: ProductType
}

export type ICart = {
    product: IProduct,
    amount: number 
}