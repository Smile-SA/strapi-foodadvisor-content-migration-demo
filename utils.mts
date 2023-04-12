import {RestaurantInput} from './input-types.mjs';
import {Restaurant} from './strapi-content-types.mjs';

/**
 * Returns the Strapi content type (among ‘p1’, ‘p2’, ‘p3’ and ‘p4’) from a numeric price
 */
export function getPrice(price: number): NonNullable<Restaurant['price']> {
    return price > 200
        ? 'p4'
        : price > 100
            ? 'p3'
            : price > 50
                ? 'p2'
                : 'p1';
}

/**
 * Returns a String address from a structured object address
 */
export function getAddress(restaurant: RestaurantInput): string {
    return [
        restaurant.address?.street,
        restaurant.address?.postalCode,
        restaurant.address?.locality,
        restaurant.address?.country,
    ]
        .filter(v => !!v)
        .join(' ');
}
