export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
    category: string;
}

export interface CartProduct {
    product: Product;
    quantity: number;
}