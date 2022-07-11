
import { IProduct } from "../types/product"
export const products: IProduct[] = [
    {
        id: 1,
        name: "Small Pizza",
        description: "10' pizza for one person", 
        type: 1,
        price: 11.99,
        image: 'https://images-gmi-pmc.edge-generalmills.com/2a88c35a-1c88-470b-bc52-ea014206bd46.jpg',
        amount: 9999
    },
    {
        id: 2,
        name: "Medium Pizza",
        description: "12' pizza for one person", 
        type: 2,
        image: 'https://hyvongviet.vn/wp-content/uploads/2020/07/b%C3%A1nh-pizza-mini.png',
        price: 15.99,
        amount: 9999
    },
    {
        id: 3,
        name: "Large Pizza",
        description: "15' pizza for one person", 
        image: 'https://lambanhngon.com/news_pictures/ojk1359220734.jpg',
        type: 3,
        price: 21.99,
        amount: 9999
    }
]