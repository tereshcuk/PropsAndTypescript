
export interface ImageInfo {
    url_570xN: string;
}

export interface ListingItem {
    listing_id: number;
    url?: string;
    MainImage: ImageInfo;
    title: string;
    currency_code: string;
    price: string;
    quantity: number;
}