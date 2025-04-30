export interface Product {
    id	       : number,
    title      : string,
    price      : number,
    description: string,
    category   : string,
    images      : string[],
    quantity?: number;
    brand	: string;
};

// export interface ProductListShpopCar extends Product {
//     quantity: number,
// };

export interface ProductListResponse {
    products: Product[];
    total   : number;
    skip    : number;
    limit   : number;
};