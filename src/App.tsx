// App.tsx
import React from 'react';
import Listing from './components/Listing';
import data from './data/etsy.json';
import type { ListingItem } from './interfaces.ts';


// function validateListingItems(data: ListingItem[]): ListingItem[] {
//   return data.filter((item): item is ListingItem => {
//     return (
//       typeof item.listing_id === 'number' &&
//       typeof item.title === 'string' &&
//       typeof item.currency_code === 'string' &&
//       typeof item.price === 'string' &&
//       typeof item.quantity === 'number' &&
//       typeof item.url === 'string'
//     );
//   });
// }
const validListings: ListingItem[] = data
  .filter((item) => {
    return (
      item.state === "active" &&
      typeof item.title === "string" &&
      item.title.trim() !== "" &&
      item.MainImage?.url_570xN
    );
  })
  .map((item) => {
    const imageUrl = item.MainImage?.url_570xN || "";
    return {
      listing_id: Number(item.listing_id),
      url: String(item.url),
      MainImage: {
        url_570xN: String(imageUrl),
      },
      title: String(item.title).trim(),
      currency_code: String(item.currency_code).trim(),
      price: String(item.price).trim(),
      quantity: Number(item.quantity),
      state: "active",
    };
  });


const App: React.FunctionComponent = () => {
  return (
    <div className="container">
      <h1>Список предложений</h1>      
      <Listing items={validListings} />
    </div>
  );
};

export default App;