import {StrapiClient} from '@smile/strapi-client';
import * as fs from 'fs';
import {RestaurantInput} from './input-types.mjs';
import {Restaurant} from './strapi-content-types.mjs';
import {getAddress, getPrice} from './utils.mjs';

const token = '07d3a1040426f2bd2c7714d9dbaad0517a21af1da7ad082955d801169fd0f4305a8e7e4b8162b6d1a57edfa87ace57ab7a6b38dca8a662071c91d9bfca593e79d688d340a6b217cb96db4bf1f121f228f4a14b224dd9768e360b624204dcfd253511f374124a4431424560ba709e1d243d0d05add820bface121c479c6505d6c';
const adminToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjgxMzEzMzg1LCJleHAiOjE2ODM5MDUzODV9.p1-q0e0z4nGHUq8J4XLr4ZATXHT3k5wcN2LzXNN7wzc';
const strapiClient = new StrapiClient('http://127.0.0.1:1337', token, adminToken);

const restaurants: RestaurantInput[] = JSON.parse(fs.readFileSync('./restaurants.json').toString());

const mediaIds: number[] = [];

async function createRestaurant(restaurant: RestaurantInput) {
  const mediaCreationResponse = await strapiClient.addMediaAsset(restaurant.mainPhotoSrc!);
  const mediaId = mediaCreationResponse[0].id;
  mediaIds.push(mediaId);
  await strapiClient.createEntry<Restaurant>('restaurants', {
    name: restaurant.name,
    slug: restaurant.slug,
    images: [{id: mediaId}],
    price: getPrice(restaurant.priceRange),
    information: {
      location: {
        address: getAddress(restaurant)
      }
    },
    place: 1
  });
}

for (let i = 0; i < restaurants.length; i++){
  const restaurant = restaurants[i];
  try {
    await createRestaurant(restaurant);
    console.log(`Created restaurant ${i + 1}/${restaurants.length} (${Math.round((i + 1) * 100 / restaurants.length)}%)`);
  } catch (e) {
    console.error(`Failed creating restaurant`, JSON.stringify(restaurant, null, 2), e);
  }
}

const mediaFolderCreation = await strapiClient.createMediaFolder(`Migration ${new Date().toISOString()}`);
await strapiClient.moveMedia(mediaFolderCreation.data.id, mediaIds);
