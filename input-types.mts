export interface RestaurantInput {
    name: string;
    slug: string;
    mainPhotoSrc?: string;
    priceRange: number;
    address?: {
        street?: string;
        postalCode?: string;
        locality?: string;
        country?: string;
    }
}
